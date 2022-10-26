import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Navbar () {
  const router = useRouter()
  const route = router.pathname

  const { isAuth, setToken } = useContext(AuthContext)

  const links = () => {
    return (
      isAuth
        ? <li>
          <a className={styles.logOutLink}
            onClick={() => setToken('')}
          >
            Log Out
          </a>
        </li>
        : <li>
          <Link href='/auth'>
            <a className={styles.logInLink}>Log in</a>
          </Link>
        </li>
    )
  }

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <Link href='/'>
          <a className={styles.navImgBox}>
            <img src='/img/memories.png' alt='logo' />
            <h3>Blog App</h3>
          </a>
        </Link>
        <ul className={styles.navUlMobile}>
          <FontAwesomeIcon icon={faBars} />
        </ul>
        <ul className={styles.navUl}>
          {route !== '/auth' && links()}
        </ul>
      </nav>
    </div>
  )
}
