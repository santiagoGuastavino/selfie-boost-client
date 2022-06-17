import React, { useEffect, useState } from 'react'
import BlogList from '../BlogList'
import { getRequest } from '../../helper/apiCall'
import { useAuth } from '../../hooks/useAuth'

export default function Blogs () {
  useAuth()

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    getRequest('/blog', setBlogs)
  }, [])

  return (
    <BlogList
      allBlogs
      blogs={blogs}
      title='Blogs'
    />
  )
}
