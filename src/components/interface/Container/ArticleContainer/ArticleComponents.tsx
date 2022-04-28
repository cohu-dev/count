import { noAll } from '@/constants/html'
import Link from 'next/link'
import React from 'react'
import { HiExternalLink } from 'react-icons/hi'
import H2 from '../../Heading/H2/H2'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { CodeComponent } from 'react-markdown/lib/ast-to-react'
import H3 from '../../Heading/H3/H3'

const customA = ({ ...props }) => {
  const href = props.href as string
  const cohuRegex = new RegExp(`\^(https://)\?([\\w|-]\+\\.)?cohu\\.dev`)
  if (href.startsWith('/') || cohuRegex.test(href)) {
    return (
      <Link href={href}>
        <a target="_self" className="a-text">
          {props.children}
        </a>
      </Link>
    )
  }
  return (
    <a
      className="flex-inline a-text justify-center"
      href={href}
      target="_blank"
      rel={noAll}
    >
      {props.children}
      <HiExternalLink className="inline h-5 w-5" />
    </a>
  )
}
const customImg = ({ ...props }) => {
  return (
    <img
      className="mx-auto h-40 w-auto rounded-md border-stone-400 drop-shadow-xl dark:opacity-90 md:h-80"
      src={props.src}
      loading="lazy"
    />
  )
}
const customH2 = ({ ...props }) => {
  return <H2 label={props.children} classNameText={props.children} />
}
const customH3 = ({ ...props }) => {
  return <H3 label={props.children} />
}
const customCode: CodeComponent = ({ inline, className, children }) => {
  const style = atomDark
  const match = /language-(\w+)(:?.+)?/.exec(className || '')
  const lang = match && match[1] ? match[1] : ''
  const name = match && match[2] ? match[2].slice(1) : ''
  if (lang === 'link') {
    //   use only inner link, why a tag rel is not customed
    return (
      <iframe
        className="mx-auto w-full max-w-7xl dark:opacity-90"
        src={`https://hatenablog-parts.com/embed?url=${children}`}
      />
    )
  }
  return !inline && match ? (
    <>
      {name && (
        <span className="rounded-md bg-stone-200 py-1 px-2 text-sm dark:bg-stone-600">
          {name}
        </span>
      )}
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={style}
        language={lang}
        PreTag="div"
        className="border-2 text-base dark:border-stone-400 md:text-lg"
      />
    </>
  ) : (
    <code className="mx-1 rounded-md bg-stone-200 py-1 px-2 text-red-600 dark:bg-stone-600 dark:text-red-300">
      {children}
    </code>
  )
}
const customHr = () => {
  return <hr className="border-2 border-stone-200 dark:border-stone-600" />
}
const customBlockquote = ({ ...props }) => {
  return (
    <blockquote className="border-l-4 border-stone-400 opacity-75">
      {props.children}
    </blockquote>
  )
}
export const articleComponents = {
  a: customA,
  img: customImg,
  h2: customH2,
  h3: customH3,
  code: customCode,
  hr: customHr,
  blockquote: customBlockquote,
}
