import React, { memo } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../../model/Navbar/Navbar'
import { navLinks } from '@/constants/navLinks'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import MainContainer from '../Container/MainContainer/MainContainer'
type Props = { children: React.ReactNode }
const Layout: React.FC<Props> = memo(({ children }) => {
  return (
    <div className="flex flex-col bg-stone-200 font-body text-stone-900 dark:bg-stone-900 dark:text-stone-100">
      <Navbar popLinks={navLinks} />
      <div className="container my-2 mx-auto min-h-screen w-full p-2 sm:p-4 md:p-8">
        <MainContainer>{children}</MainContainer>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  )
})
export default Layout
