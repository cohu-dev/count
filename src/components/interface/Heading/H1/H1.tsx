import React, { FC } from 'react'
type Props = {
  label: string
}
const H1: FC<Props> = ({ label }) => {
  return (
    <>
      <h2 className="my-3 text-center text-3xl font-bold text-stone-800 dark:text-stone-100">
        {label}
      </h2>
    </>
  )
}

export default H1
