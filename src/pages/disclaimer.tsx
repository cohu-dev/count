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
    name: '免責事項',
    slug: '',
  },
]
type Props = {
  disclaimer: string
}
const Index: NextPage<Props> = ({ disclaimer }) => {
  return (
    <Layout>
      <SEO path={PrivacyPath} title="免責事項" />
      <Breadcrumb breads={breads} />
      <ArticleContainer markdown={disclaimer} />
    </Layout>
  )
}
export default Index

export const getStaticProps: GetStaticProps = async () => {
  const disclaimer = fs.readFileSync(
    process.cwd() + '/src/data/disclaimer.md',
    'utf8'
  )
  return {
    props: {
      disclaimer,
    },
  }
}
