import LineIcon from '@/components/interface/Icon/LineIcon/LineIcon'
import IconLinkButton from '@/components/interface/IconLinkButton/IconLinkButton'
import React from 'react'

type Props = {
  url: string
}

const LineShare: React.FC<Props> = ({ url }) => {
  return (
    <IconLinkButton
      Icon={LineIcon}
      href={`https://social-plugins.line.me/lineit/share?url=${url}`}
      noFollow={true}
      newTab={true}
    />
  )
}

export default LineShare
