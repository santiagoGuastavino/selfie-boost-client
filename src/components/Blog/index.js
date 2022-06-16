import './styles.css'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Blog ({ blog }) {
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    blog.user === userId && setIsUser(true)
    blog.user._id === userId && setIsUser(true)
  }, [])

  return (
    <article className='blog-article'>
      {isUser &&
        <div className='blog-controls'>
          <Link to={`/blog-edit/${blog._id}`}>
            <FontAwesomeIcon className='control-edit' icon={faPenToSquare} />
          </Link>
          <Link to={`/blog-delete/${blog._id}`}>
            <FontAwesomeIcon className='control-delete' icon={faTrashCan} />
          </Link>
        </div>
      }
      <h2>{blog.title}</h2>
      {blog.user.name &&
        <p className='blog-submitted-by'>Submitted by {blog.user.name}</p>
      }
      <img src={blog.image} alt={blog.title} />
      <p>{blog.description}</p>
    </article>
  )
}
