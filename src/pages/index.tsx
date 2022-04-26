import Counter from '@/components/function/Counter/Counter'
import type { NextPage } from 'next'
import Layout from '../components/interface/Layout/Layout'

const Index: NextPage = () => {
  return (
    <Layout>
      <Counter />
    </Layout>
  )
}

export default Index
