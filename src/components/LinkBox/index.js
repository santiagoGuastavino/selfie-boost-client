import './styles.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LinkBox () {
  return (
    <nav className='link-box'>
      <ul className='link-box-ul'>
        <li>
          <NavLink
            to='/blogs'
            activeclassname='active'
          >
            All blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-blogs'
            activeclassname='active'
          >
            My blogs
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
