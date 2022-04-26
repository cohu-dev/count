import React, { FC, memo } from 'react'
import { bgColor } from '../../../libs/css'

export type roleType = 'info' | 'success' | 'warn' | 'error' | 'normal'

type ButtonProps = {
  role: roleType
  size?: 'small' | 'medium' | 'large'
  label?: string
  onClick: () => void
  type?: 'button' | 'submit'
  //   loading
}

const Button: FC<ButtonProps> = memo(
  ({ onClick, label, type = 'button', role }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`mx-1 max-w-xl rounded-lg py-2 px-6 text-center text-base font-semibold text-stone-100 shadow-md transition duration-200 ease-in focus:outline-none  focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 focus:ring-offset-gray-200  ${bgColor(
          role
        )}`}
      >
        {label}
      </button>
    )
  }
)

export default Button
