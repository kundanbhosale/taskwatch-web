import React, { Fragment } from 'react'
import Bloglist from '@/components/bloglist '
import Cta from '@/components/cta '
import { getAllPosts, getPostBySlug } from '@/lib/blog/api '
import configuration from '@/configuration '
import SinglePost from '@/components/singlePost '

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const post = params.slug && (await getPostBySlug(params.slug))
  if (!post) return

  return {
    title: post.title, //Post Title
    description: post.description, //Post Description,

    alternates: {
      canonical: post.canonical, // Post Canonical
    },
    openGraph: {
      type: 'article',
      title: post.title, //Post Title
      description: post.description, //Post Description,
      publishedTime: post.date, //Update
      images: post.image, //Post Image Url,
    },
    twitter: {
      description: post.description, //Post Description,
      title: post.title, //Post Title,
      images: post.image, //Post Image Url,
    },
  }
}

const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const post = params.slug && (await getPostBySlug(params.slug))
  const posts = await getAllPosts()
  if (!post) return

  const filtred = posts
    .filter((p) => p.slug !== post.slug)
    .splice(0, configuration.blog.maxReadMorePosts)

  return (
    <Fragment>
      <SinglePost post={post} />
      <Cta />
      {filtred && <Bloglist posts={filtred} />}
    </Fragment>
  )
}

export default SinglePostPage
