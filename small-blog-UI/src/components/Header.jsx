import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='border-b border-gray-800'>
      <ul className='flex justify-center items-center gap-5 py-6 bg-black text-white text-xl'>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : "hover:text-orange-600"}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : "hover:text-orange-600"}>About</NavLink></li>
        <li><NavLink to="/posts" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : "hover:text-orange-600"}>Post</NavLink></li>
      </ul>
    </div>
  )
}

export default Header