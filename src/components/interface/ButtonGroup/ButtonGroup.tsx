import { ButtonsType } from '@/types/button'
import React, { FC } from 'react'

type Props = {
  buttons: ButtonsType
}

const bgCss =
  'border border-stone-200 dark:border-stone-500 bg-white px-4 py-2 text-sm font-medium text-stone-900 hover:bg-stone-100 focus:z-10 focus:text-stone-700 focus:ring-2 focus:ring-stone-700 dark:bg-stone-600 dark:text-stone-200 dark:focus:ring-stone-400'

const ButtonGroup: FC<Props> = ({ buttons }) => {
  const buttonLen = buttons.length
  const centerButtonLen = buttonLen - 2
  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-5 inline-flex rounded-md shadow-sm" role="group">
        <button type="button" className={`${bgCss} rounded-l-lg`}>
          {buttons[0].label}
        </button>
        {centerButtonLen > 0 &&
          buttons.slice(1, buttonLen - 1).map((b) => (
            <button type="button" className={`${bgCss} border-t border-b`}>
              {b.label}
            </button>
          ))}
        <button type="button" className={`${bgCss} rounded-r-md`}>
          {buttons[buttonLen - 1].label}
        </button>
      </div>
    </div>
  )
}

export default ButtonGroup
