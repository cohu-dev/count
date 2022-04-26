import Layout from '../components/interface/Layout/Layout'
import { NextPage } from 'next'
import { HomePath } from '../constants/paths'
import LinkButton from '../components/interface/LinkButton/LinkButton'

const Index: NextPage = () => {
  return (
    <Layout>
      <div>
        <div className="m-auto flex min-h-screen w-9/12 items-center justify-center py-8">
          <div className="overflow-hidden bg-stone-200 pb-8 shadow dark:bg-stone-800 sm:rounded-lg">
            <div className="pt-8 text-center">
              <h1 className="text-6xl font-bold text-blue-400">500</h1>
              <h1 className="py-8 text-4xl font-medium">
                エラーが発生しました。
              </h1>
              {/* ilust */}
              <p className="px-6 pb-8 text-xl font-medium">
                申し訳ありませんが、エラーが発生しました。トップページまたは直前のページにお戻りください。
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
