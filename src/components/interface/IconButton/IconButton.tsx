import React, { FC, memo } from 'react'
import { IconType } from 'react-icons'

type Props = {
  onClick: () => void
  Icon: IconType
}
const IconButton: FC<Props> = memo(({ onClick, Icon }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="whitespace-no-wrap inline-flex h-8 w-8 items-center justify-center rounded-md border border-stone-200 bg-stone-100 text-base font-medium leading-6 text-stone-700 shadow-sm hover:bg-stone-200 focus:ring-2 focus:ring-stone-300 focus:ring-offset-2  dark:border-stone-500 dark:bg-stone-600 dark:text-stone-100 dark:hover:bg-stone-600 dark:focus:ring-stone-700 md:h-10 md:w-10"
    >
      <Icon />
    </button>
  )
})

export default IconButton
