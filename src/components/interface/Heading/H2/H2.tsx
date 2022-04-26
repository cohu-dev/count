import React, { FC } from 'react'
import Horizon from '../../Horizon/Horizon'
type Props = {
  label: string
}
const H2: FC<Props> = ({ label }) => {
  return (
    <>
      <h2 className="my-3 text-2xl font-bold text-stone-800 dark:text-stone-100">
        {label}
      </h2>
      <Horizon />
    </>
  )
}

export default H2
