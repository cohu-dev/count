import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { HiClock, HiRefresh } from 'react-icons/hi'
import H1 from '@/components/interface/Heading/H1/H1'
import IconText from '@/components/interface/IconText/IconText'
import { articleComponents } from './ArticleComponents'
import TOC from '@/components/function/TOC/TOC'

type Props = {
  markdown: string
}

const ArticleContainer: FC<Props> = ({ markdown }) => {
  return (
    <article>
      {/* <TOC markdown={markdown} /> */}
      <ReactMarkdown
        className="prose-base break-all prose-h1:text-center prose-p:my-8 prose-pre:p-0 prose-ol:list-decimal prose-ul:list-disc prose-ul:pl-5 prose-p:prose-li:my-0 dark:prose-invert md:prose-p:my-12 md:prose-p:prose-li:my-4 lg:prose-lg lg:prose-p:my-14 lg:prose-pre:px-0"
        children={markdown}
        components={articleComponents}
      />
    </article>
  )
}

export default ArticleContainer
