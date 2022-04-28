import { HomePath } from '@/constants/paths'
import React from 'react'
import LinkButton from '../../LinkButton/LinkButton'

const NotFound = () => {
  return (
    <div className="m-auto flex min-h-screen w-full items-center justify-center py-8 md:w-9/12">
      <div className="overflow-hidden bg-stone-300 pb-8 text-stone-800 shadow dark:bg-stone-800 dark:text-stone-100 sm:rounded-lg">
        <div className="pt-8 text-center">
          <h1 className="text-5xl font-bold text-blue-400">404</h1>
          <h1 className="py-8 text-3xl font-medium">
            このページには何もありません
          </h1>
          {/* ilust */}
          <p className="px-6 pb-8 text-lg font-medium">
            申し訳ありませんが、このページには何もございません。コンテンツがすでに削除されているか、URLが間違えている可能性がございます。
          </p>
          <LinkButton role="info" href={HomePath} label="トップへ" />
        </div>
      </div>
    </div>
  )
}

export default NotFound
