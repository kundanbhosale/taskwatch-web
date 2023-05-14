import { Post } from '@/lib/blog/api '
import React from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'
import MdxContent from './mdx-components'

const SinglePost = ({ post }: { post: Post }) => {
  return (
    <section className='mx-auto mt-12  max-w-screen-lg px-4'>
      <div className='border-b  pb-4'>
        <div className='single-post-image-wrapper relative mb-4 md:mb-10'>
          {post.image && (
            <Image
              src={post.image}
              fill
              alt={`Cover Image of ${post.title}`}
              style={{ objectFit: 'cover' }}
              loading='lazy'
              className='mb-1'
            />
          )}
        </div>
        <h1 className='mb-2 text-3xl md:mb-6'>{post.title}</h1>
        <div>
          <div className='flex justify-between text-center font-medium'>
            <p>Updated on {dayjs(post.date).format('DD MMM, YYYY')}</p>
            <p>{post.readingTime} mins read</p>
          </div>
        </div>
      </div>
      <div className='article border-b  py-2 md:py-10'>
        {post.serialized && <MdxContent source={post.serialized} />}
      </div>
    </section>
  )
}

export default SinglePost
