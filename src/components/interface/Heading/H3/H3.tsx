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
      )} mt-8 mb-2 text-lg font-semibold text-stone-800 underline underline-offset-4 dark:text-stone-100 md:text-xl`}
    >
      {label}
    </h3>
  )
}

export default H3
