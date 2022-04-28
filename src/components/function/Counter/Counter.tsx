import { FC, memo, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Button from '@/components/interface/Button/Button'
import toast, { Toaster } from 'react-hot-toast'
import LinkButton from '@/components/interface/LinkButton/LinkButton'
import { serviceName } from '@/constants/service'
import { FrontURL } from '@/constants/urls'
const notify = () => toast.success('コピーしました')

type PProps = {
  label: string
}
const P: FC<PProps> = ({ label }) => {
  return <p className="text-center text-lg">{label}</p>
}

const Counter = memo(() => {
  const [input, setInput] = useState('')
  const inputHandler = (e: any) => {
    setInput(e.target.value)
  }
  return (
    <>
      <textarea
        className="text-md my-2 h-48 w-full rounded-md border-2 border-gray-600 p-4 dark:bg-stone-700 md:h-96"
        value={input}
        onChange={(e) => inputHandler(e)}
      />
      <P label={`${input ? input.length : 0}文字（スペース込み）`} />
      <P label={`${input.replace(/\s+/g, '').length}文字（スペースなし）`} />
      <P
        label={`${
          input.match(/\r\n|\n/g) ? input.match(/\r\n|\n/g)!.length + 1 : 1
        }行`}
      />
      <div className="mt-2 grid-cols-2 space-x-2 text-center">
        <CopyToClipboard text={input}>
          <Button label="コピー" role="normal" onClick={notify} />
        </CopyToClipboard>
        <Button label="リセット" role="error" onClick={() => setInput('')} />
      </div>
      <div className="my-6 text-center">
        <LinkButton
          label="Twitterでシェア"
          role="info"
          href={`https://twitter.com/intent/tweet?text=${serviceName}&url=${FrontURL}`}
          newTab={true}
        />
      </div>
      <Toaster />
    </>
  )
})
export default Counter
