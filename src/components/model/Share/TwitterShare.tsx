import TwitterIcon from '@/components/interface/Icon/TwitterIcon/TwitterIcon'
import IconLinkButton from '@/components/interface/IconLinkButton/IconLinkButton'
import React from 'react'

type Props = {
  url: string
  text: string
  hashtags?: string
}

const TwitterShare: React.FC<Props> = ({ url, text }) => {
  return (
    <IconLinkButton
      newTab={true}
      noFollow={true}
      Icon={TwitterIcon}
      href={`https://twitter.com/intent/tweet?text=${text}\n&url=${url}`}
    />
  )
}

export default TwitterShare
