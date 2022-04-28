import React, { memo } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../../model/Navbar/Navbar'
import { navLinks } from '@/constants/navLinks'
import Sidebar from '../Sidebar/Sidebar'
type Props = { children: React.ReactNode }
const SidebarLayout: React.FC<Props> = memo(({ children }) => {
  return (
    <div className="flex flex-col bg-stone-200 font-body text-stone-900 dark:bg-stone-800 dark:text-stone-100">
      <Navbar popLinks={navLinks} />
      <div className="container mx-auto flex min-h-screen p-3  md:p-6 md:pb-10">
        <main className="w-full md:w-3/4">{children}</main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
})
export default SidebarLayout
