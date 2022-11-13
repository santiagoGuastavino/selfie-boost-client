import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Navbar () {
  const router = useRouter()
  const route = router.pathname

  const { isAuth, setToken } = useContext(AuthContext)

  const [displayNav, setDisplayNav] = useState(false)

  useEffect(() => {
    setDisplayNav(false)
  }, [])

  const toggleNavLinks = () => {
    setDisplayNav(!displayNav)
  }

  const logOut = () => {
    toggleNavLinks()
    setToken('')
  }

  useEffect(() => {
    return () => {
      setDisplayNav(false)
    }
  }, [])

  // const links = () => {
  //   return (
  //     isAuth
  //       ? <li>
  //         <a className={styles.logOutLink}
  //           onClick={() => setToken('')}
  //         >
  //           Log Out
  //         </a>
  //       </li>
  //       : 
  //   )
  // }

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <div className={styles.navImgBox}>
          <img src='/img/memories.png' alt='logo' />
          <h3>Blog App</h3>
        </div>
        {route !== '/auth' && (
          <>
            <ul className={`${styles.navLinks} ${displayNav ? styles.show : ''}`}>
              <div className={styles.navigationLinks}>
                {isAuth
                  ? <>
                    <li onClick={toggleNavLinks}>All blogs</li>
                    <li onClick={toggleNavLinks}>My blogs</li>
                    <li onClick={toggleNavLinks}>Add blog</li>
                  </>
                  : <Link href='/auth' onClick={toggleNavLinks}>
                    Log in to add your blog.
                  </Link>
                }
              </div>
              <div className={styles.authLinks}>
                {!isAuth
                  ? <Link href='/auth'>
                    Log in
                  </Link>
                  : <a onClick={logOut}>Log out</a>
                }
              </div>
            </ul>
            <div className={styles.navHamburger}>
              <FontAwesomeIcon
                icon={faBars}
                onClick={toggleNavLinks}
              />
            </div>
          </>
        )}
        {route === '/auth' &&
          <Link className={styles.homeLink} href='/'>
            Home
          </Link>
        }
      </nav>
    </div>
  )
}
