import Counter from '@/components/function/Counter/Counter'
import { SEO } from '@/components/function/SEO'
import ArticleContainer from '@/components/interface/Container/ArticleContainer/ArticleContainer'
import H1 from '@/components/interface/Heading/H1/H1'
import LinkButton from '@/components/interface/LinkButton/LinkButton'
import type { GetStaticProps, NextPage } from 'next'
import Layout from '../components/interface/Layout/Layout'
import fs from 'fs'

type Props = {
  markdown: string
}

const Index: NextPage<Props> = ({ markdown }) => {
  return (
    <Layout>
      <SEO path="/" title="Notion文字数カウント" />
      <H1 label="Notionに埋め込める文字数カウンター" />
      <div className="my-4 mx-auto grid grid-cols-1 gap-2 text-center md:grid-cols-2">
        <LinkButton label="埋め込みページはこちら" href="/embed" role="info" />
        <LinkButton
          label="使い方はこちら"
          href="https://cohu.notion.site/0cd45d1441d745a6952cfa47fe91237c"
          role="normal"
          newTab={true}
        />
      </div>
      <Counter />
      <ArticleContainer markdown={markdown} />
    </Layout>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const markdown = fs.readFileSync(process.cwd() + '/src/data/index.md', 'utf8')
  return {
    props: {
      markdown,
    },
  }
}
