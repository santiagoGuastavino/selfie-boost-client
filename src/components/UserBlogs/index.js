import React, { useEffect, useState } from 'react'
import BlogList from '../BlogList'
import { getRequest } from '../../helper/apiCall'

export default function UserBlogs () {
  const [blogs, setBlogs] = useState([])

  const id = localStorage.getItem('userId')

  useEffect(() => {
    getRequest(`/blog/user/${id}`, setBlogs)
  }, [])

  return (
    <BlogList
      userBlogs
      blogs={blogs}
      title='My blogs'
    />
  )
}
