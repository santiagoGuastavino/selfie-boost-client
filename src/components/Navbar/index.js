import './styles.css'
import React from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../store'

export default function Navbar () {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const dispatch = useDispatch()

  const handleClick = () => {
    localStorage.clear()
    dispatch(authActions.logout())
  }

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
          <li>
            <Link to='/'>Login</Link>
          </li>
        }
          { isLoggedIn &&
            <li>
              <Link
                onClick={handleClick}
                to='/'
              >
                Log Out
              </Link>
            </li>
          }
        </ul>
      </nav>
    </div>
  )
}
