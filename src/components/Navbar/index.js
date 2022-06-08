import './styles.css'
import React from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
  return (
    <div className='nav-wrapper'>
      <nav className='nav'>
        <div className='nav-img-box'>
          <img src={logo} alt='logo' />
          <h3>Blog App</h3>
        </div>
        <ul className='nav-ul-mobile'>
          <FontAwesomeIcon icon={faBars} />
        </ul>
        <ul className='nav-ul'>
          <li>
            <Link to=''>Login</Link>
          </li>
          <li>
            <Link to=''>Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
