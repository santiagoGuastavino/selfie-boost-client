import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getRequest, putRequest } from '../../helper/apiCall'
import { useAuth } from '../../hooks/useAuth'
import BlogForm from '../BlogForm'

export default function BlogEdit () {
  useAuth()

  const [formData, setFormData] = useState(null)

  const id = useParams().id
  const navigate = useNavigate()

  useEffect(() => {
    getRequest(`/blog/${id}`, setFormData)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    putRequest(`/blog/${id}`, formData)
      .then(response => {
        if (response.ok) {
          navigate('/my-blogs')
        }
      })
      .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <>
    {formData &&
      <BlogForm
        title='Change a blog'
        buttonText='Edit'
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
    }
    </>
  )
}
