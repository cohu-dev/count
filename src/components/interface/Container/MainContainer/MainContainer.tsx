import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const MainContainer: FC<Props> = ({ children }) => {
  return (
    <main className="text-md mx-auto min-w-full rounded-md border border-stone-300 bg-stone-100 px-4 pt-4 pb-12 shadow-lg dark:border-stone-700 dark:bg-stone-800 md:px-12">
      {children}
    </main>
  )
}

export default MainContainer
