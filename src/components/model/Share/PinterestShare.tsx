import PinterestIcon from '@/components/interface/Icon/PinterestIcon/PinterestIcon'
import IconLinkButton from '@/components/interface/IconLinkButton/IconLinkButton'
import React, { FC } from 'react'
type Props = {
  url: string
}
const PinterestShare: FC<Props> = ({ url }) => {
  return (
    <IconLinkButton
      Icon={PinterestIcon}
      href={`https://social-plugins.line.me/lineit/share?url=${url}`}
      noFollow={true}
      newTab={true}
    />
  )
}

export default PinterestShare
