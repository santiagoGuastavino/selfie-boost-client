import React, { useState } from 'react'
import { postRequest } from '../../helper/apiCall'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../BlogForm'
import { useAuth } from '../../hooks/useAuth'

const INITIAL_STATE = {
  title: '',
  description: '',
  image: ''
}

export default function AddBlog () {
  useAuth()

  const [formData, setFormData] = useState(INITIAL_STATE)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const postData = {
      title: formData.title,
      description: formData.description,
      image: formData.image,
      user: localStorage.getItem('userId')
    }

    postRequest('/blog', postData)
      .then(response => {
        if (response.ok) {
          setFormData(INITIAL_STATE)
          navigate('/blogs')
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
    <BlogForm
      title='Add a blog'
      buttonText='Create'
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formData={formData}
    />
  )
}
