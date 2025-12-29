import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <ul className='flex justify-center items-center gap-5 py-4 bg-black text-white'>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-orange-600 font-semibold" : "hover:text-orange-600"}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-600 font-semibold" : "hover:text-orange-600"}>About</NavLink></li>
        <li><NavLink to="/post" className={({ isActive }) => isActive ? "text-orange-600 font-semibold" : "hover:text-orange-600"}>Post</NavLink></li>
      </ul>
    </div>
  )
}

export default Header