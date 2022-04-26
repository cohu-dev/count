import IconLinkButton from '@/components/interface/IconLinkButton/IconLinkButton'
import React from 'react'
import { RiTwitterFill } from 'react-icons/ri'

type Props = {
  url: string
  text: string
  hashtags?: string
  userName?: string
  via?: string
}

const TwitterShare: React.FC<Props> = ({ url, text, hashtags }) => {
  return (
    <IconLinkButton
      newTab={true}
      noFollow={true}
      Icon={RiTwitterFill}
      href={`https://twitter.com/intent/tweet?text=${text}\n&url=${url}&hashtags=${hashtags}&via=bista__dev`}
    />
  )
}

export default TwitterShare
