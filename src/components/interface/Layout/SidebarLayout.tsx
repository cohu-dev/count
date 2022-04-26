import React, { memo } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../../model/Navbar/Navbar'
import { navLinks } from '@/constants/navLinks'
type Props = { children: React.ReactNode }
const SidebarLayout: React.FC<Props> = memo(({ children }) => {
  return (
    <div className="flex flex-col bg-stone-200 font-body text-stone-900 dark:bg-stone-800 dark:text-stone-100">
      <Navbar popLinks={navLinks} />
      <main className="container mx-auto min-h-screen w-full p-3 md:p-6 md:pb-10">
        {children}
      </main>
      <Footer />
    </div>
  )
})
export default SidebarLayout
