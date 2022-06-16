import React, { useEffect, useState } from 'react'
import BlogList from '../BlogList'
import { getRequest } from '../../helper/apiCall'

export default function Blogs () {
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
