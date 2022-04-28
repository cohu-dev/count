import Layout from '../components/interface/Layout/Layout'
import { GetStaticProps, NextPage } from 'next'
import { SEO } from '../components/function/SEO'
import { BreadcrumbsType } from '../types/breadcrumbs'
import Breadcrumb from '../components/interface/Breadcrumbs/BreadCrumbs'
import fs from 'fs'
import { PrivacyPath } from '../constants/paths'
import ArticleContainer from '@/components/interface/Container/ArticleContainer/ArticleContainer'

const breads: BreadcrumbsType = [
  {
    name: 'プライバシーポリシー',
    slug: '',
  },
]
type Props = {
  privacy: string
}
const Index: NextPage<Props> = ({ privacy }) => {
  return (
    <Layout>
      <SEO path={PrivacyPath} title="プライバシーポリシー" />
      <Breadcrumb breads={breads} />
      <ArticleContainer markdown={privacy} />
    </Layout>
  )
}
export default Index

export const getStaticProps: GetStaticProps = async () => {
  const privacy = fs.readFileSync(
    process.cwd() + '/src/data/privacy.md',
    'utf8'
  )
  return {
    props: {
      privacy,
    },
  }
}
