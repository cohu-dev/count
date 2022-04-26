import Layout from '../components/interface/Layout/Layout'
import { NextPage } from 'next'
import LinkButton from '../components/interface/LinkButton/LinkButton'
import { HomePath } from '../constants/paths'

const Index: NextPage = () => {
  return (
    <Layout>
      <div className="">
        <div className="m-auto flex min-h-screen w-9/12 items-center justify-center py-8">
          <div className="overflow-hidden bg-stone-300 pb-8 shadow dark:bg-stone-800 sm:rounded-lg">
            <div className="pt-8 text-center">
              <h1 className="text-6xl font-bold text-blue-400">404</h1>
              <h1 className="py-8 text-4xl font-medium">
                このページには何もありません
              </h1>
              {/* ilust */}
              <p className="px-6 pb-8 text-xl font-medium">
                申し訳ありませんが、このページには何もございません。コンテンツがすでに削除されているか、URLが間違えている可能性がございます。
              </p>
              <LinkButton role="info" href={HomePath} label="トップへ" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Index
