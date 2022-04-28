import { MatterType } from '@/types/post'
import React, { FC } from 'react'
import BlogCard from '../../BlogCard/BlogCard'
type Props = { posts: MatterType[] }

const BlogContainer: FC<Props> = ({ posts }) => {
  return (
    <section className="grid gap-x-4 gap-y-8 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts && posts.map((p) => <BlogCard key={p.title} post={p} />)}
    </section>
  )
}

export default BlogContainer
