import Layout from '../components/interface/Layout/Layout'
import { GetStaticProps, NextPage } from 'next'
import { SEO } from '../components/function/SEO'
import { BreadcrumbsType } from '../types/breadcrumbs'
import Breadcrumb from '../components/interface/Breadcrumbs/BreadCrumbs'
import { ContactPath } from '@/constants/paths'

const breads: BreadcrumbsType = [
  {
    name: 'よくある質問',
    slug: '',
  },
]
type Props = {}
const Index: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <SEO path={ContactPath} title="よくある質問" />
      <Breadcrumb breads={breads} />
    </Layout>
  )
}
export default Index

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
