import React from 'react'
import SidebarItem from './SidebarItem'
import { FiInbox } from 'react-icons/fi'
import { ImSun } from 'react-icons/im'
import { TbCalendarTime } from 'react-icons/tb'

function Sidebar() {
  return (
    <div className="Sidebar" id="sidebar">
      <nav className="nav">
        <SidebarItem
          navTitle={'Inbox'}
          SidebarIcon={<FiInbox />}
        />
        <SidebarItem
          navTitle={'Today'}
          SidebarIcon={<ImSun />}
        />
        <SidebarItem
          navTitle={'Upcoming'}
          SidebarIcon={<TbCalendarTime />}
        />
      </nav>
    </div>

  )
}

export default Sidebar


