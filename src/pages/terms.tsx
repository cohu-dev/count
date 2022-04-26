import Layout from '../components/interface/Layout/Layout'
import { GetStaticProps, NextPage } from 'next'
import { SEO } from '../components/function/SEO'
import { BreadcrumbsType } from '../types/breadcrumbs'
import Breadcrumb from '../components/interface/Breadcrumbs/BreadCrumbs'
import fs from 'fs'
import ArticleContainer from '@/components/interface/Layout/Container/ArticleContainer/ArticleContainer'

const breads: BreadcrumbsType = [
  {
    name: '利用規約',
    slug: '',
  },
]
type Props = {
  terms: string
}
const Index: NextPage<Props> = ({ terms }) => {
  return (
    <Layout>
      <SEO path="/terms" title="利用規約" />
      <Breadcrumb breads={breads} />
      <ArticleContainer markdown={terms} />
    </Layout>
  )
}
export default Index

export const getStaticProps: GetStaticProps = async () => {
  const terms = fs.readFileSync(process.cwd() + '/src/data/terms.md', 'utf8')
  return {
    props: {
      terms: terms,
    },
  }
}
