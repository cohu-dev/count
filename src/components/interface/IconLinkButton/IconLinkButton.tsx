import { noAll } from '@/constants/html'
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import { IconType } from 'react-icons'
import { HiPlusCircle } from 'react-icons/hi'

type Props = {
  href: string
  Icon?: IconType
  noFollow: boolean
  newTab: boolean
}
const IconLinkButton: FC<Props> = ({
  href,
  Icon = HiPlusCircle,
  noFollow,
  newTab,
}) => {
  const rel = noFollow ? noAll : ''
  const target = newTab ? '_blank' : '_self'
  return (
    <Link prefetch={false} href={href}>
      <a
        className="whitespace-no-wrap dark: mx-auto inline-flex h-10 w-10 items-center justify-center rounded-md border border-stone-300 bg-stone-100 text-base font-medium leading-6 text-stone-700 shadow-sm hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-offset-2 dark:border-stone-500 dark:bg-stone-600 dark:text-stone-50 dark:hover:bg-stone-600 dark:focus:ring-stone-700"
        rel={rel}
        target={target}
      >
        <Icon />
      </a>
    </Link>
  )
}

export default IconLinkButton
