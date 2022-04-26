import { ButtonsType } from '@/types/button'
import { LinksType } from '@/types/link'
import Link from 'next/link'
import React, { FC } from 'react'

const bgCss =
  'border border-stone-200 dark:border-stone-500 bg-white px-4 py-2 text-sm font-medium text-stone-900 hover:bg-stone-100 focus:z-10 focus:text-stone-700 focus:ring-2 focus:ring-stone-700 dark:bg-stone-600 dark:text-stone-200 dark:focus:ring-stone-400'

type Props = {
  links: LinksType
}

const LinkButtonGroup: FC<Props> = ({ links }) => {
  const linkLen = links.length
  const centerLinkLen = linkLen - 2
  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-5 inline-flex rounded-md shadow-sm" role="group">
        <Link href={links[0].href}>
          <a className={`${bgCss} rounded-l-lg`}>{links[0].label}</a>
        </Link>
        {centerLinkLen > 0 &&
          links.slice(1, linkLen - 1).map((l) => (
            <Link href={l.href}>
              <a type="button" className={`${bgCss} border-t border-b`}>
                {l.label}
              </a>
            </Link>
          ))}
        <Link href={links[linkLen - 1].href}>
          <a className={`${bgCss} rounded-r-md`}>{links[linkLen - 1].label}</a>
        </Link>
      </div>
    </div>
  )
}

export default LinkButtonGroup
