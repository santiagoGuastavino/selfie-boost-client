import './styles.css'
import React, { useState } from 'react'
import { postRequest } from '../../helper/apiCall'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

export default function Auth () {
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState(INITIAL_STATE)

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

    postRequest(`${process.env.REACT_APP_BASE_URL}/user${requestType}`, postData)
      .then(response => console.log(response))
      .catch(err => console.log(err))

    setFormData(INITIAL_STATE)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
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
