import { SEO } from '@/components/function/SEO'
import Breadcrumb from '@/components/interface/Breadcrumbs/BreadCrumbs'
import CogLoading from '@/components/interface/Loading/CogLoading/CogLoading'
import { AboutPath } from '@/constants/paths'
import { BreadcrumbsType } from '@/types/breadcrumbs'
import type { NextPage } from 'next'
import Layout from '../components/interface/Layout/Layout'

const breads: BreadcrumbsType = [
  {
    name: 'このサイトについて',
    slug: '#',
  },
]
const Index: NextPage = () => {
  return (
    <Layout>
      <SEO path={AboutPath} title="このサイトについて" />
      <Breadcrumb breads={breads} />
      <CogLoading />
    </Layout>
  )
}

export default Index
