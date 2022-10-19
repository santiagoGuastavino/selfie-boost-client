import styles from '../styles/Error.module.scss'

export default function Error ({ errorMessage }) {
  return (
    <div className={styles.div}>
      {errorMessage.map((error, i) => (
        <span key={i}>
          {error}
        </span>
      ))}
    </div>
  )
}
