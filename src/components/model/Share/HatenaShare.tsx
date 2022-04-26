import IconLinkButton from '@/components/interface/IconLinkButton/IconLinkButton'
import React from 'react'
import { SiHatenabookmark } from 'react-icons/si'
type Props = {
  url: string
}
const HatenaShare: React.FC<Props> = ({ url }) => {
  return (
    <IconLinkButton
      Icon={SiHatenabookmark}
      href={`https://b.hatena.ne.jp/add?&url=${url}`}
      noFollow={true}
      newTab={true}
    />
  )
}

export default HatenaShare
