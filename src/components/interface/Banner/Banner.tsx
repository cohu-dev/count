import React, { FC } from 'react'
import { HiX } from 'react-icons/hi'
import LinkButton from '../LinkButton/LinkButton'

type Props = {
  label: string
  href: string
}

const Banner: FC<Props> = ({ label, href }) => {
  return (
    <div className="bg-white pt-6 sm:pt-8 lg:pt-12">
      <div className="mx-auto max-w-screen-2xl px-4 pb-4 md:px-8">
        <div className="ms:px-8 relative flex flex-wrap rounded-lg bg-blue-500 px-4 py-3 shadow-lg dark:bg-blue-600 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8">
          <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
            {label}
          </div>
          <LinkButton href={href} role="info" label="詳しく見る" />
          {/* <div className="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-2 sm:w-auto xl:mr-3">
            <button
              type="button"
              className="text-white transition duration-100 hover:text-blue-100 active:text-blue-200"
            >
              <HiX
                className="h-5 w-5 xl:h-6 xl:w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
              />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Banner
