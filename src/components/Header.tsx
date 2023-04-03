import { Scroll, Timer } from 'phosphor-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo.svg'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <img className="h-10 w-10" src={logo} alt="Logo" />
      <nav className="flex gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'navIcons text-green-500' : 'navIcons text-gray-100'
          }
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? 'navIcons text-green-500' : 'navIcons text-gray-100'
          }
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </div>
  )
}
