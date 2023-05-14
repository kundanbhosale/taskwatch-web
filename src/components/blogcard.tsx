import { Post } from '@/lib/blog/api '
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blogcard = ({ post }: { post: Post }) => {
  if (!post) return null
  return (
    <Link href={`blogs/${post.slug}`} className='group cursor-pointer' passHref>
      {post.image && (
        <Image
          src={post.image}
          width={300}
          height={300}
          alt={`Cover Image of ${post.title}`}
          className='mb-1'
          style={{ objectFit: 'cover', width: '100%' }}
        />
      )}
      <p className='mb-1 line-clamp-2 w-fit font-bold group-hover:text-primary-500	group-hover:underline'>
        {post.title}
      </p>
      <p className='line-clamp-4 text-sm '>{post.description}</p>
      <p className='text-sm font-bold text-primary-500 '>{`Read More ->`}</p>
    </Link>
  )
}

export default Blogcard
