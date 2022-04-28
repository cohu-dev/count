import React, { FC } from 'react'
type Props = {
  label: string
}
const H1: FC<Props> = ({ label }) => {
  return (
    <>
      <h1 className="my-3 mx-auto table max-w-4xl text-left text-xl font-bold text-stone-800 dark:text-stone-100 md:my-6 md:text-3xl">
        {label}
      </h1>
    </>
  )
}

export default H1
