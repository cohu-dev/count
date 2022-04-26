import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import Link from 'next/link'
import { noAll } from '@/constants/html'
import { HiLink } from 'react-icons/hi'

const customLink = ({ ...props }) => {
  const href = props.href as string
  if (href.startsWith('/')) {
    return (
      <Link href={href}>
        <a target="_self">{props.children}</a>
      </Link>
    )
  }
  return (
    <a className="flex-inline" href={href} target="_blank" rel={noAll}>
      <HiLink className="inline" />
      {props.children}
    </a>
  )
}
type Props = {
  markdown: string
}
const ArticleContainer: FC<Props> = ({ markdown }) => {
  return (
    <article className="md:prose-md prose-base mx-auto min-w-full rounded-md bg-stone-100 px-4 py-8 shadow-md prose-h1:text-center  prose-a:text-blue-400 dark:prose-invert dark:bg-stone-700 md:px-12">
      <ReactMarkdown children={markdown} components={{ a: customLink }} />
    </article>
  )
}

export default ArticleContainer
