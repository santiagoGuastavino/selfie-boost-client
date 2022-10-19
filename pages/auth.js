import styles from '../styles/Auth.module.scss'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import { AuthTypes } from '../common/auth-types.enum'
import { UserContext } from '../context/UserContext'
import { postRequest } from '../helpers/fetchApi'
import Error from '../components/Error'

const FORM_INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

export default function Auth () {
  const [authType, setAuthType] = useState(AuthTypes.LOGIN)
  const [formData, setFormData] = useState(FORM_INITIAL_STATE)
  const [errorMessages, setErrorMessages] = useState('')

  // const { user, setUser } = useContext(UserContext)

  // useEffect(() => {
  //   console.log(user)
  // }, [user])

  // useEffect(() => {
  //   console.log(errorMessage)
  // }, [errorMessage])

  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault()
    authType === AuthTypes.LOGIN && delete formData.name
    postRequest('/auth/login', formData)
      .then(res => {
        if (res.statusCode === 400) {
          setErrorMessages(res.message)
        }
      })
      // .catch(err => setErrorMessage(err.message))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    authType === AuthTypes.LOGIN && setAuthType(AuthTypes.SIGNUP)
    authType === AuthTypes.SIGNUP && setAuthType(AuthTypes.LOGIN)
  }

  return (
    <>
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <form onSubmit={handleSubmit} className={styles.authForm}>
        <h2>
          {authType === AuthTypes.LOGIN ? 'Login' : 'Sign up'}
        </h2>
        {authType === AuthTypes.SIGNUP &&
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
          className={styles.submitButton}
        >
          Submit
        </button>
      </form>
      <div className={styles.authToggle}>
        <button
          type='button'
          onClick={handleClick}
        >
          {authType === AuthTypes.LOGIN
            ? 'Sign up instead'
            : 'Log in instead'
          }
        </button>
      </div>

      {errorMessages &&
        <Error
          errorMessage={errorMessages}
        />
      }
    </>
  )
}
