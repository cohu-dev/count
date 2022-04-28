import FacebookIcon from '@/components/interface/Icon/FacebookIcon/FacebookIcon'
import IconLinkButton from '@/components/interface/IconLinkButton/IconLinkButton'
import React from 'react'

type Props = {
  url: string
}

const FacebookShare: React.FC<Props> = ({ url }) => {
  return (
    <IconLinkButton
      Icon={FacebookIcon}
      href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
      noFollow={true}
      newTab={true}
    />
  )
}

export default FacebookShare
