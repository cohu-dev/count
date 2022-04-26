import { noAll } from '@/constants/html'
import Link from 'next/link'
import React, { FC } from 'react'
import { IconType } from 'react-icons'

type Props = {
  href: string
  Icon: IconType
  noFollow: boolean
  newTab: boolean
}
const IconLinkButton: FC<Props> = ({ href, Icon, noFollow, newTab }) => {
  const rel = noFollow ? noAll : ''
  const target = newTab ? '_blank' : '_self'
  return (
    <Link prefetch={false} href={href}>
      <a
        className="whitespace-no-wrap dark: inline-flex h-8 w-8 items-center justify-center rounded-md border border-stone-200 bg-stone-100 text-base font-medium leading-6 text-stone-700 shadow-sm hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-offset-2 dark:border-stone-400 dark:bg-stone-600 dark:text-stone-50 dark:hover:bg-stone-600 dark:focus:ring-stone-700 md:h-10 md:w-10"
        rel={rel}
        target={target}
      >
        <Icon />
      </a>
    </Link>
  )
}

export default IconLinkButton
