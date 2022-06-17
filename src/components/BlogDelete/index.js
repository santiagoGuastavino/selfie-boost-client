import './styles.css'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteRequest, getRequest } from '../../helper/apiCall'
import Blog from '../Blog'
import { useAuth } from '../../hooks/useAuth'

export default function BlogDelete () {
  useAuth()

  const [blog, setBlog] = useState(null)

  const id = useParams().id
  const navigate = useNavigate()

  useEffect(() => {
    getRequest(`/blog/${id}`, setBlog)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    deleteRequest(`/blog/${id}`)
      .then(response => {
        if (response.ok) {
          navigate('/my-blogs')
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='delete-blog-wrap'>
        <h2 className='delete-blog-header'>Are you sure you want to delete this post?</h2>
        {blog &&
          <Blog
            blog={blog}
          />
        }
        <button type='submit' className='delete-button'>Delete</button>
      </form>
    </>
  )
}
