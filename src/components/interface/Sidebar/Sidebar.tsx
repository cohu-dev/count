import React from 'react'
import H3 from '../Heading/H3/H3'

const Sidebar = () => {
  return (
    <aside className="hidden md:block md:w-1/4">
      <div className="my-3 h-20 bg-slate-50 p-3">
        <H3 label="hogehoge" align="center" />
      </div>
    </aside>
  )
}

export default Sidebar
