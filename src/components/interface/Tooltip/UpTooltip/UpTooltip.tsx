import React, { FC } from 'react'
import { HiQuestionMarkCircle } from 'react-icons/hi'

type Props = {
  label: string
}

const UpTooltip: FC<Props> = ({ label }) => {
  return (
    <div className="group relative flex flex-col items-center">
      <HiQuestionMarkCircle />
      <div className="absolute bottom-0 mb-6 hidden flex-col items-center group-hover:flex">
        <span className="whitespace-no-wrap relative z-10 bg-black p-2 text-xs leading-none text-white shadow-lg">
          {label}
        </span>
        <div className="-mt-2 h-3 w-3 rotate-45 bg-black"></div>
      </div>
    </div>
  )
}

export default UpTooltip
