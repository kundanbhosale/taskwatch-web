import Bloglist from '@/components/bloglist '
import Cta from '@/components/cta '
import { Post, getAllPosts } from '@/lib/blog/api '
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'

import React, { Fragment } from 'react'

const MainPost = ({ post }: { post: Post }) => {
  return (
    <Link href={`blogs/${post.slug}`} passHref className='group'>
      <div className='mb-8 bg-gradient-to-b from-violet-200 to-violet-100 md:mb-16 md:grid md:grid-cols-2 md:bg-gradient-to-r'>
        <div className='single-post-image-wrapper relative'>
          {post.image && (
            <Image
              src={post.image}
              fill
              alt={`Cover Image of ${post.image}`}
              style={{ objectFit: 'cover' }}
              loading='lazy'
              className='mb-1'
            />
          )}
        </div>
        <div className='px-4 py-8 md:p-8 '>
          <h1 className='mb-2 text-xl hover:text-primary-700 hover:underline md:mb-4 md:text-2xl'>
            {post.title}
          </h1>
          <p className='mb-4 text-sm'>
            {dayjs(post.date).format('DD MMM, YYYY')} - {post.readingTime} mins
            read
          </p>
          <p className='mb-4'>{post.description}</p>
          <p className='text-sm font-bold '>{`Read More ->`}</p>
        </div>
      </div>
    </Link>
  )
}

const PostListPage = async () => {
  const posts = await getAllPosts()
  if (!posts)
    return (
      <div className='flex-center flex h-full align-middle'>
        <h1 className='m-auto text-center'>No posts found!</h1>
      </div>
    )

  const [first] = posts.splice(0, 1)
  const rest = (posts.length > 0 && posts.splice(0, 4)) || []

  return (
    <Fragment>
      <section className='mx-auto my-4 max-w-screen-lg p-4 md:my-10'>
        <h1 className='title m-auto mb-8 text-center md:mb-16'> Blogs</h1>
        <MainPost post={first} />
      </section>
      <Bloglist posts={rest} className='border-b pb-8' />
      <Cta />
    </Fragment>
  )
}

export default PostListPage
