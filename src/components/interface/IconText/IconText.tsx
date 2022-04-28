import React, { FC } from 'react'
import { IconType } from 'react-icons'
type Props = {
  Icon: IconType
  label: string
}
const IconText: FC<Props> = ({ Icon, label }) => {
  return (
    <p className="inline-flex items-center justify-center">
      <Icon className="mr-1 h-5 w-5 text-stone-600 dark:text-stone-200" />
      {label}
    </p>
  )
}

export default IconText
