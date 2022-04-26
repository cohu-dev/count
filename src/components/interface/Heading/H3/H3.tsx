import React, { FC } from 'react'
type AlignType = 'center' | 'left'

type Props = {
  label: string
  align?: AlignType
}

const textAlign = (align: AlignType) => {
  switch (align) {
    case 'center':
      return 'text-center'
    case 'left':
      return 'text-left'
    default:
      return ''
  }
}
const H3: FC<Props> = ({ label, align = 'left' }) => {
  return (
    <h3
      className={`${textAlign(
        align
      )} my-2 text-xl font-bold text-stone-800 dark:text-stone-100`}
    >
      {label}
    </h3>
  )
}

export default H3
