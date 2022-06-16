import './styles.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Blog from '../Blog'

export default function BlogList ({ title, blogs, allBlogs, userBlogs }) {
  const [lazyRender, setLazyRender] = useState(null)

  function mapBlogs () {
    return blogs.map((blog, i) => (<Blog key={i} blog={blog} />))
  }

  useEffect(() => {
    setLazyRender(<h2>Loading....</h2>)
    setTimeout(() => {
      setLazyRender(<h2>You haven&apos;t submitted any posts, <Link className='add-one-link' to='/add'>add one.</Link></h2>)
    }, 500)
  }, [])

  return (
    <section className='blogs-list'>
      <h1>{title}</h1>
      {allBlogs && blogs.length === 0 &&
        <h2>Loading....</h2>
      }
      {allBlogs && blogs.length > 0 &&
        mapBlogs()
      }
      {userBlogs && blogs.length === 0 &&
        lazyRender
      }
      {userBlogs && blogs.length > 0 &&
        mapBlogs()
      }
    </section>
  )
}
