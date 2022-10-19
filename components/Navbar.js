import styles from '../styles/Navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <div className={styles.navImgBox}>
          <img src='/img/memories.png' alt='logo' />
          <h3>Blog App</h3>
        </div>
        <ul className={styles.navUlMobile}>
          <FontAwesomeIcon icon={faBars} />
        </ul>
        <ul className={styles.navUl}>
        {/* { isLoggedIn &&
          <li>
            <Link
              onClick={handleClick}
              to='/'
            >
              Log Out
            </Link>
          </li>
        } */}
        </ul>
      </nav>
    </div>
  )
}
