import { join } from 'path'
import { readdirSync, promises } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'

type Matter = {
  image: string
  description: string
  slug: string
  title: string
  date: string
  live: boolean
  tags: string[]
  canonical: string
}

type FileOutput<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult
  frontmatter: TFrontmatter
  raw: string
}

export type Post = Matter & {
  live: boolean
  readingTime: number
  slug: string
  serialized: MDXRemoteSerializeResult
  content: string
}

const POSTS_DIRECTORY_NAME = '_posts'

const MDX_EXTENSION = '.mdx'

const postsDirectory = join(process.cwd(), POSTS_DIRECTORY_NAME)

const removeExtensionFromSlug = (slug: string, extension = MDX_EXTENSION) => {
  return slug.replace(extension, '')
}

const posts = readdirSync(postsDirectory).map((post) => {
  return removeExtensionFromSlug(post)
})

const readFile = async (
  fullPath: string
): Promise<FileOutput<Matter> | undefined> => {
  try {
    const raw = await promises.readFile(fullPath, 'utf-8')

    // Serialize the MDX content and parse the frontmatter
    const serialized = await serialize(raw, {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutoLinkHeadings],
        format: 'mdx',
      },
      parseFrontmatter: true,
    })

    // Typecast the frontmatter to the correct type
    const frontmatter = serialized.frontmatter as Matter

    // Return the serialized content and frontmatter
    return {
      raw,
      frontmatter,
      serialized,
    }
  } catch (e) {
    console.warn(`Error while reading Front matter at ${fullPath}`, e)
    return undefined
  }
}

const getReadingTimeInMinutes = (content: string, wordsPerMinute = 225) => {
  const words = content.trim().split(/\s+/).length

  return Math.ceil(words / wordsPerMinute)
}

export const getAllPosts = async () => {
  const foundPosts: Post[] = []
  await Promise.all(
    posts.map(async (p) => {
      const post = await getPostBySlug(p)
      // we want to exclude blog posts
      // if it's the prod env AND if not live
      if (post && ('live' in post || !process.env.production)) {
        foundPosts.push(post)
      }
    })
  )

  return foundPosts.sort(sortBlogPostByDate)
}

const sortBlogPostByDate = (item: Post, nextItem: Post) => {
  if (!item.date || !nextItem.date) {
    return 1
  }

  return item.date > nextItem.date ? -1 : 1
}

export const getPostBySlug = async (slug: string) => {
  const postPath = join(postsDirectory, `${slug}${MDX_EXTENSION}`)
  const file = await readFile(postPath)

  if (!file || !file.frontmatter || !file.serialized) {
    return
  }

  const { frontmatter, serialized, raw } = file

  const empty = Object.keys(frontmatter).length === 0

  if (empty) {
    return
  }

  const readingTime = getReadingTimeInMinutes(file.raw) || 15

  const post: Partial<Post> = {
    live: frontmatter.live,
    readingTime,
    slug: removeExtensionFromSlug(slug),
    serialized,
    content: raw,
  }

  for (const field in frontmatter) {
    if (field === 'date' && frontmatter.date) {
      try {
        post[field] = new Date(frontmatter.date).toISOString()
        continue
      } catch (e) {
        console.error(`Error processing blog post date ${frontmatter.date}`)
      }
    }

    // if the field exists, assign as is
    if ((frontmatter as any)[field]) {
      Object.assign(post, {
        [field]: (frontmatter as any)[field],
      })
    }
  }

  return post as Post
}
