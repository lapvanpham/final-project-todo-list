import React from 'react'
import { NavLink } from 'react-router-dom'

function SidebarItem({ linkTo, SidebarIcon, navTitle }) {
  return (
    <NavLink className="nav_link" to={`/${linkTo}`}>
      <span>{SidebarIcon}</span>
      <span className="nav_name">{navTitle}</span>
    </NavLink>
  )
}

export default SidebarItem