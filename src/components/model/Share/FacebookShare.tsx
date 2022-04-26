import IconLinkButton from '@/components/interface/IconLinkButton/IconLinkButton'
import React from 'react'
import { SiFacebook } from 'react-icons/si'

type Props = {
  url: string
}

const FacebookShare: React.FC<Props> = ({ url }) => {
  return (
    <IconLinkButton
      Icon={SiFacebook}
      href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
      noFollow={true}
      newTab={true}
    />
  )
}

export default FacebookShare
