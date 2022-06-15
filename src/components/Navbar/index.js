import './styles.css'
import React from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

export default function Navbar () {
  const isLoggedIn = useSelector(state => state.isLoggedIn)

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
        { !isLoggedIn &&
          <>
            <li>
              <Link to='/auth'>Login</Link>
            </li>
            <li>
              <Link to='/auth'>Sign Up</Link>
            </li>
          </>
        }
          { isLoggedIn &&
            <li>
              <Link to='/auth'>Log Out</Link>
            </li>
          }
        </ul>
      </nav>
    </div>
  )
}
