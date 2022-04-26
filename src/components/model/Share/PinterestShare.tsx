import IconLinkButton from '@/components/interface/IconLinkButton/IconLinkButton'
import React from 'react'
import { RiPinterestFill } from 'react-icons/ri'

const PinterestShare = () => {
  return (
    <IconLinkButton
      Icon={RiPinterestFill}
      href={`https://social-plugins.line.me/lineit/share?url=`}
      noFollow={true}
      newTab={true}
    />
  )
}

export default PinterestShare
