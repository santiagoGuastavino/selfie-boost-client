import styles from '../styles/Layout.module.scss'

export default function Layout ({ children }) {
  return (
    <main className={styles.layout}>
      {children}
    </main>
  )
}
