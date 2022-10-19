import styles from '../styles/Blogs.module.scss'

export default function Blogs ({ blogs }) {
  return (
    <section className={styles.blogList}>
      <h1>Blogs</h1>
      {blogs && blogs.length &&
        blogs.map((blog, i) => (
          <article key={i} className='blog-article'>
            <h2>
              {blog.title}
            </h2>
            <img src={blog.imageUrl} alt={blog.title} />
            <p>
              {blog.description}
            </p>
          </article>
        ))
      }
    </section>
  )
}
