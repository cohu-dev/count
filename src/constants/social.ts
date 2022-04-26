import GithubIcon from '@/components/interface/Icon/GithubIcon/GithubIcon'
import InstagramIcon from '@/components/interface/Icon/InstagramIcon/InstagramIcon'
import LinkedinIcon from '@/components/interface/Icon/LinkedinIcon/LinkedinIcon'
import TwitterIcon from '@/components/interface/Icon/TwitterIcon/TwitterIcon'
import YoutubeIcon from '@/components/interface/Icon/YoutubeIcon/YoutubeIcon'
import { LinksType } from '@/types/link'
import { TwitterURL } from './urls'

export const socials: LinksType = [
  {
    label: 'twitter',
    Icon: TwitterIcon,
    href: TwitterURL,
  },
  {
    label: 'instagram',
    Icon: InstagramIcon,
    href: '',
  },
  {
    label: 'github',
    Icon: GithubIcon,
    href: '',
  },
  {
    label: 'youtube',
    Icon: YoutubeIcon,
    href: '',
  },
  {
    label: 'linked in',
    Icon: LinkedinIcon,
    href: '',
  },
]
