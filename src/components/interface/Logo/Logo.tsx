import { HomePath } from '@/constants/paths'
import { serviceName } from '@/constants/service'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className="flex flex-1 justify-start">
      <Link href={HomePath} prefetch={false}>
        <a className="flex items-center justify-center text-xl font-bold text-stone-800 dark:text-stone-100 md:text-2xl">
          <img
            className="mr-2 inline h-6 w-6 md:h-8 md:w-8"
            src="/favicons/favicon-32x32.png"
            alt="Logo Image"
            loading="lazy"
          />
          {serviceName}
        </a>
      </Link>
    </div>
  )
}

export default Logo
