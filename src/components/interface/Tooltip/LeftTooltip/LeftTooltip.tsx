import React, { FC } from 'react'
import { HiQuestionMarkCircle } from 'react-icons/hi'

type Props = {
  label: string
}
const LeftTooltip: FC<Props> = ({ label }) => {
  return (
    <div className="group relative flex items-center">
      <div className="absolute right-0 mr-6 hidden items-center group-hover:flex">
        <span className="whitespace-no-wrap relative z-10 bg-black p-2 text-xs leading-none text-white shadow-lg">
          A left aligned tooltip.
        </span>
        <div className="-ml-2 h-3 w-3 rotate-45 bg-black"></div>
      </div>
      <HiQuestionMarkCircle />
    </div>
  )
}

export default LeftTooltip
