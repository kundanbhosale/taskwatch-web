import React from 'react'
import Blogcard from './blogcard'
import { Post } from '@/lib/blog/api '
const Bloglist = ({
  posts,
  className,
}: {
  posts: Post[]
  className?: string
}) => {
  return (
    <section
      className={`mb-8 max-w-screen-lg px-4  lg:mx-auto ${
        className && className
      }`}
    >
      <div className='grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4'>
        {posts && posts.map((post, i) => <Blogcard key={i} post={post} />)}
      </div>
    </section>
  )
}

export default Bloglist
