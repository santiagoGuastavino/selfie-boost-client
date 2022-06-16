import './styles.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  {
    url: '/blogs',
    text: 'All blogs'
  },
  {
    url: '/my-blogs',
    text: 'My blogs'
  },
  {
    url: '/add',
    text: 'Add blog'
  }
]

export default function LinkBox () {
  return (
    <nav className='link-box'>
      <ul className='link-box-ul'>
        {links.map((link, i) => (
          <li key={i}>
            <NavLink
              to={link.url}
              activeclassname='active'
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
