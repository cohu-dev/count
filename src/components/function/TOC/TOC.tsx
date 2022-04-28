import React, { FC } from 'react'
import { HiLink } from 'react-icons/hi'
import ReactMarkdown from 'react-markdown'
type Props = {
  markdown: string
}

const customH2 = ({ ...props }) => {
  return (
    <li>
      <a
        href={`#${props.children}`}
        className="inline-flex items-center py-1 text-base text-stone-700 duration-300 hover:text-stone-500 dark:text-stone-100 dark:hover:text-stone-300 md:text-lg"
      >
        <HiLink className="mr-2" />
        {props.children}
      </a>
    </li>
  )
}

const components = { h2: customH2 }

const TOC: FC<Props> = ({ markdown }) => {
  return (
    <details
      open
      className="my-4 rounded-md bg-white p-2 shadow-md hover:cursor-pointer focus:outline-none dark:bg-stone-700 md:p-6"
    >
      <summary className="text-base font-semibold text-stone-800 focus:outline-none dark:text-stone-100 md:text-lg">
        目次（タップして移動）
      </summary>
      <ol className="p-2 md:p-4">
        <ReactMarkdown
          className="md:prose-md dark:prose-invert"
          children={markdown}
          allowedElements={['h2']}
          components={components}
        />
      </ol>
    </details>
  )
}

export default TOC
