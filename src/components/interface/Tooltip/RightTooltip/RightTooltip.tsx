import React, { FC } from 'react'
import { HiQuestionMarkCircle } from 'react-icons/hi'

type Props = {
  label: string
}

const RightTooltip: FC<Props> = ({ label }) => {
  return (
    <div className="group relative flex items-center">
      <HiQuestionMarkCircle />
      <div className="absolute left-0 ml-6 hidden items-center group-hover:flex">
        <div className="-mr-2 h-3 w-3 rotate-45 bg-black"></div>
        <span className="whitespace-no-wrap relative z-10 bg-black p-2 text-xs leading-none text-white shadow-lg">
          {label}{' '}
        </span>
      </div>
    </div>
  )
}

export default RightTooltip
