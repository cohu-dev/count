import React, { FC } from 'react'
import Button from '../../../interface/Button/Button'
import LinkButton from '../../../interface/LinkButton/LinkButton'
type Props = {
  mainLabel: string
  subLabel: string
  onClick: () => void
  path: string
  onClickText: string
  pathText: string
}
const ButtonLinkCTA: FC<Props> = ({
  mainLabel,
  subLabel,
  onClick,
  path,
  onClickText,
  pathText,
}) => {
  return (
    <div className="my-4 rounded-md bg-stone-100 dark:bg-stone-600 md:my-8">
      <div className="z-20 mx-auto w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-xl font-extrabold text-stone-900 dark:text-stone-50 md:text-3xl">
          <span className="mb-3 block">{mainLabel}</span>
          <span className="block text-blue-600 dark:text-blue-400">
            {subLabel}
          </span>
        </h2>
        <div className="mt-3 lg:mt-0 lg:flex-shrink-0">
          <Button
            type="button"
            role="info"
            label={onClickText}
            onClick={onClick}
          />

          <div className="ml-3 inline-flex rounded-md shadow">
            <LinkButton role="normal" href={path} label={pathText} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonLinkCTA
