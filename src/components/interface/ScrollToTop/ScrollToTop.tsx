import { useEffect, useState } from 'react'
import { HiChevronDoubleUp } from 'react-icons/hi'
import IconButton from '../IconButton/IconButton'
const PAGE_Y_OFFSET = 200
const ScrollToTop = () => {
  const [show, setShow] = useState<boolean>(false)

  const changeShow = () => {
    if (window.pageYOffset > PAGE_Y_OFFSET) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const onScrollTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', changeShow)
    return () => window.removeEventListener('scroll', changeShow)
  }, [])

  if (show)
    return (
      <div className="fixed bottom-10 right-10 z-10">
        <IconButton Icon={HiChevronDoubleUp} onClick={onScrollTop} />
      </div>
    )
  else return null
}

export default ScrollToTop
