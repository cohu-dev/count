import { BlogPath } from '@/constants/paths'
import { MatterType } from '@/types/post'
import Link from 'next/link'
import React, { FC } from 'react'
import { HiClock, HiRefresh } from 'react-icons/hi'
import { EmojiEntity, parse } from 'twemoji-parser'
import IconText from '../IconText/IconText'
type Props = {
  post: MatterType
}
const BlogCard: FC<Props> = ({ post }) => {
  const emoji: EmojiEntity = parse(post.emoji)[0]
  return (
    <Link href={`${BlogPath}/${post.slug}`}>
      <a>
        <article
          className="rounded-md
     border border-stone-200 bg-stone-50 p-4 shadow-md duration-200 hover:bg-stone-200 dark:border-stone-500 dark:bg-stone-700 dark:hover:bg-stone-600"
        >
          <img
            loading="lazy"
            className="mx-auto mb-4 max-w-md rounded-md border-stone-300 bg-stone-200 p-4 shadow-md dark:bg-stone-100 dark:opacity-80"
            height="100px"
            width="100px"
            alt={`${post.title}の絵文字`}
            src={emoji.url}
          />
          <hr />
          <div className="my-1 grid grid-cols-2">
            <IconText label={post.date} Icon={HiClock} />
            <IconText label={post.lastmod} Icon={HiRefresh} />
          </div>
          <h2 className="font-semibold ">{post.title}</h2>
        </article>
      </a>
    </Link>
  )
}

export default BlogCard
