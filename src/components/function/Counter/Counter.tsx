import { FC, memo, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Button from '@/components/interface/Button/Button'
import toast, { Toaster } from 'react-hot-toast'
const notify = () => toast.success('URLをコピーしました')

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
        className="text-md h-48 w-full rounded-md border-2 border-gray-600 p-4 md:h-96"
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
      <div className="mt-2 space-x-2 text-center">
        <CopyToClipboard text={input}>
          <Button label="コピー" role="normal" onClick={notify} />
        </CopyToClipboard>
        <Button label="リセット" role="error" onClick={() => setInput('')} />
      </div>
      <Toaster />
    </>
  )
})
export default Counter
