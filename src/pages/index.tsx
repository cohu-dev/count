import Counter from '@/components/function/Counter/Counter'
import { SEO } from '@/components/function/SEO'
import type { NextPage } from 'next'
import Layout from '../components/interface/Layout/Layout'

const Index: NextPage = () => {
  return (
    <Layout>
      <SEO path="/" title="Notion文字数カウント" />
      <Counter />
    </Layout>
  )
}

export default Index
