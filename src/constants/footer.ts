import {
  AboutPath,
  ChangelogPath,
  ContactPath,
  DisclaimerPath,
  FaqsPath,
  LoadmapPath,
  PrivacyPath,
  TermsPath,
} from './paths'
import { serviceName } from './service'

export const legals: { name: string; href: string }[] = [
  {
    name: 'プライバシーポリシー',
    href: PrivacyPath,
  },
  {
    name: '利用規約',
    href: TermsPath,
  },
  {
    name: '免責事項',
    href: DisclaimerPath,
  },
]
export const abouts: { name: string; href: string }[] = [
  {
    name: `${serviceName}について`,
    href: AboutPath,
  },
  {
    name: 'よくある質問',
    href: FaqsPath,
  },
  {
    name: 'チェンジログ',
    href: ChangelogPath,
  },
  {
    name: 'ロードマップ',
    href: LoadmapPath,
  },
]
export const contacts: { name: string; href: string }[] = [
  { name: 'お問い合わせ', href: '' },
]
