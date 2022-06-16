import './styles.css'
import React, { useEffect, useState } from 'react'
import { postRequest } from '../../helper/apiCall'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store'
import { useNavigate } from 'react-router-dom'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

export default function Auth () {
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState(INITIAL_STATE)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('userId')
    user && dispatch(authActions.login())
    user && navigate('/blogs')
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    setIsSignup(!isSignup)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let requestType = ''
    !isSignup
      ? requestType = '/login'
      : requestType = ''

    const postData = {
      ...formData
    }
    !isSignup && delete postData.name

    postRequest(`/user${requestType}`, postData)
      .then((response) => {
        if (response.ok) {
          localStorage.setItem('userId', response.user._id)
          setFormData(INITIAL_STATE)
          dispatch(authActions.login())
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
    <form onSubmit={handleSubmit} className='auth-form'>
      <h2>
        {isSignup ? 'Sign Up' : 'Login'}
      </h2>
      {isSignup &&
        <input
          name='name'
          type='text'
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
        />
      }
      <input
        name='email'
        type='text'
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name='password'
        type='password'
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}
      />
      <button
        type='submit'
        className='submit-button'
      >
        Submit
      </button>
      <button
        type='button'
        onClick={handleClick}
      >
        {isSignup ? 'Login instead' : 'Sign Up instead'}
      </button>
    </form>
  )
}
