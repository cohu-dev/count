import IconLinkButton from '@/components/interface/IconLinkButton/IconLinkButton'
import React from 'react'
import { RiLineFill } from 'react-icons/ri'

type Props = {
  url: string
}

const LineShare: React.FC<Props> = ({ url }) => {
  return (
    <IconLinkButton
      Icon={RiLineFill}
      href={`https://social-plugins.line.me/lineit/share?url=${url}`}
      noFollow={true}
      newTab={true}
    />
  )
}

export default LineShare
