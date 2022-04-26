import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib'
import { noAll } from '../../../constants/html'
import { bgColor } from '../../../libs/css'
import { roleType } from '../Button/Button'

export type Props = {
  role: roleType
  href: string
  Icon?: IconType
  noFollow?: boolean
  label: string
  newTab?: boolean
}
const LinkButton: React.FC<Props> = ({
  role,
  href,
  Icon,
  noFollow,
  label,
  newTab = false,
}) => {
  const rel = noFollow ? noAll : ''
  const target = newTab ? '_blank' : '_self'
  return (
    <Link prefetch={false} href={href}>
      <a
        target={target}
        rel={rel}
        className={`max-w-xl rounded-lg py-2 px-6 text-center align-middle text-base font-semibold text-stone-100 shadow-md transition duration-200 ease-in focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 focus:ring-offset-gray-200 ${bgColor(
          role
        )}`}
      >
        {Icon && <Icon className="mr-2" height="24px" width="24px" />}
        {label}
      </a>
    </Link>
  )
}
export default LinkButton
