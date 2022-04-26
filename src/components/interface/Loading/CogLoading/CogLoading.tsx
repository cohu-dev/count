import React from 'react'
import { HiCog } from 'react-icons/hi'

const CogLoading = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <HiCog className="ani h-12 w-12 animate-spin-slow text-sky-400 dark:text-blue-200" />
      <p className="mt-2 dark:text-stone-100">Loading</p>
    </div>
  )
}

export default CogLoading
