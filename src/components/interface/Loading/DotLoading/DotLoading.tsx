import React from 'react'

const DotLoading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-2 w-2 animate-ping rounded-full bg-blue-600"></div>
      <div className="animation-delay-200 mx-4 h-2 w-2 animate-ping rounded-full bg-blue-600"></div>
      <div className="animation-delay-400 h-2 w-2 animate-ping rounded-full bg-blue-600"></div>
    </div>
  )
}

export default DotLoading
