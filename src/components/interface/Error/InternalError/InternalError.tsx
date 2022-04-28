import { HomePath } from '@/constants/paths'
import React from 'react'
import LinkButton from '../../LinkButton/LinkButton'

const InternalError = () => {
  return (
    <div className="m-auto flex min-h-screen w-full items-center justify-center py-8 md:w-9/12">
      <div className="overflow-hidden bg-stone-300 pb-8 text-stone-800 shadow dark:bg-stone-800 dark:text-stone-100 sm:rounded-lg">
        <div className="pt-8 text-center">
          <h1 className="text-5xl font-bold text-blue-400">500</h1>
          <h1 className="py-8 text-3xl font-medium">エラーが発生しました</h1>
          {/* ilust */}
          <p className="px-6 pb-8 text-lg font-medium">
            申し訳ありませんが、エラーが発生しました。トップページまたは直前のページにお戻りください。
          </p>
          <LinkButton role="info" href={HomePath} label="トップへ" />
        </div>
      </div>
    </div>
  )
}

export default InternalError
