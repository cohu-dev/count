import React, { FC } from 'react'
import { HiLink } from 'react-icons/hi'
type Props = {
  label: string
  classNameText?: string
}
const H2: FC<Props> = ({ label, classNameText }) => {
  return (
    <a href={`#${classNameText}`} className="duration-300 hover:opacity-75">
      <h2
        id={classNameText}
        className="inline-flex items-center text-xl font-semibold text-stone-800 underline underline-offset-4 dark:text-stone-100 md:text-2xl lg:text-3xl"
      >
        <HiLink className="mr-2" />
        {label}
      </h2>
    </a>
  )
}

export default H2
