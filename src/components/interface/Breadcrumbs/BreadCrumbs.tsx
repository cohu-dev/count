import Link from 'next/link'
import React, { memo } from 'react'
import { HomePath } from '../../../constants/paths'
import { BreadcrumbsType } from '../../../types/breadcrumbs'
import { HiChevronRight, HiOutlineHome } from 'react-icons/hi'

type Props = {
  breads: BreadcrumbsType
}
const Breadcrumb: React.FC<Props> = memo(({ breads }) => {
  return (
    <div className="mx-2 my-4" aria-label="Breadcrumb">
      <ol className="flex list-none flex-wrap items-center text-base ">
        <li>
          <Link href={HomePath} prefetch={false}>
            <a className="flex items-center justify-center hover:underline">
              <HiOutlineHome className="mx-1 h-5 w-5" />
              ホーム
            </a>
          </Link>
        </li>
        {breads.map((bread) => (
          <li key={bread.name}>
            <Link href={`${bread.slug}`} prefetch={false}>
              <a className="flex items-center truncate hover:underline">
                <HiChevronRight className="mx-1 h-5 w-5" />
                {bread.name}
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
})

export default Breadcrumb
