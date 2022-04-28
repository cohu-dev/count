import MoonIcon from '@/components/interface/Icon/MoonIcon/MoonIcon'
import SunIcon from '@/components/interface/Icon/SunIcon/SunIcon'
import IconButton from '@/components/interface/IconButton/IconButton'
import { useTheme } from 'next-themes'
import React from 'react'
const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()
  const onDark = () => {
    setTheme('dark')
  }
  const onLight = () => {
    setTheme('light')
  }
  return (
    <>
      {theme === 'dark' && <IconButton Icon={SunIcon} onClick={onLight} />}
      {theme === 'light' && <IconButton Icon={MoonIcon} onClick={onDark} />}
    </>
  )
}

export default ToggleTheme
