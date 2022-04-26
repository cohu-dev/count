import React, { FC } from 'react'
import LinkButton from '../../../interface/LinkButton/LinkButton'
type Props = {
  mainText: string
  subText: string
  mainPath: string
  mainLabel: string
  subPath: string
  subLabel: string
}
const TwoLinkCTA: FC<Props> = ({
  mainText,
  subText,
  mainPath,
  subPath,
  mainLabel,
  subLabel,
}) => {
  return (
    <div className="my-4 rounded-md bg-stone-100 dark:bg-stone-600 md:my-8 ">
      <div className="z-20 mx-auto w-full py-12 px-4 sm:px-6 md:py-12 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-xl font-extrabold text-stone-900 dark:text-stone-50 md:text-3xl ">
          <span className="mb-3 block">{mainText}</span>
          <span className="block text-blue-300">{subText}</span>
        </h2>
        <div className="mt-3 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <LinkButton role="info" href={mainPath} label={mainLabel} />
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <LinkButton role="normal" href={subPath} label={subLabel} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoLinkCTA
