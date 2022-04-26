import Counter from '@/components/function/Counter/Counter'
import { SEO } from '@/components/function/SEO'
import type { NextPage } from 'next'
import Layout from '../components/interface/Layout/Layout'

const Index: NextPage = () => {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center bg-white p-4 dark:bg-stone-900">
      <SEO path="/" title="Notion文字数カウント" />
      <Counter />
    </div>
  )
}

export default Index
