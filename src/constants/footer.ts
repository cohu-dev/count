import { LinksType } from '@/types/link'
import {
  AboutPath,
  ChangelogPath,
  DisclaimerPath,
  FaqsPath,
  LoadmapPath,
  PrivacyPath,
  TermsPath,
} from './paths'
import { ContactURL } from './urls'

export const legals: LinksType = [
  {
    label: 'プライバシーポリシー',
    href: PrivacyPath,
  },
  {
    label: '利用規約',
    href: TermsPath,
  },
  {
    label: '免責事項',
    href: DisclaimerPath,
  },
]
export const abouts: LinksType = [
  //   {
  //     label: `${serviceName}について`,
  //     href: AboutPath,
  //   },
  //   {`
  //     label: 'よくある質問',
  //     href: FaqsPath,
  //   },
  //   {
  //     label: 'チェンジログ',
  //     href: ChangelogPath,
  //   },
  //   {
  //     label: 'ロードマップ',
  //     href: LoadmapPath,
  //   },`
]
export const contacts: LinksType = [{ label: 'お問い合わせ', href: ContactURL }]
