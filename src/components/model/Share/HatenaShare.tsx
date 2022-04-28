import HatenaIcon from '@/components/interface/Icon/HatenaIcon/HatenaIcon'
import IconLinkButton from '@/components/interface/IconLinkButton/IconLinkButton'
import React from 'react'
type Props = {
  url: string
}
const HatenaShare: React.FC<Props> = ({ url }) => {
  return (
    <IconLinkButton
      Icon={HatenaIcon}
      href={`https://b.hatena.ne.jp/add?&url=${url}`}
      noFollow={true}
      newTab={true}
    />
  )
}

export default HatenaShare
