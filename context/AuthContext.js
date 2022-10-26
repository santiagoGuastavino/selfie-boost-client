import { createContext, useEffect, useState } from 'react'
import { getDateDiff } from '../helpers/elapsed'
import { AuthStates } from '../common/auth-states.enum'

export const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(AuthStates.UNKNOWN)
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState('')

  useEffect(() => {
    // first i check if a there is a token already and handle it

    // check local storage as object
    const localStorageToken = localStorage.getItem('token')
    if (localStorageToken) {
      const issued = localStorage.getItem('issued')
      const elapsed = getDateDiff(issued)
      console.log(elapsed)
      if (elapsed.unit === 'day' && elapsed.value > 29) {
        localStorage.clear()
        setToken('')
        setAuth(AuthStates.EXPIRED)
      } else {
        setToken(localStorageToken)
        setAuth(AuthStates.FULFILLED)
      }
    } else {
      setAuth(AuthStates.EMPTY)
    }
  }, [])

  useEffect(() => {
    // listen to app level token changes
    if (token === '') {
      localStorage.clear()
      setAuth(AuthStates.EMPTY)
    } else {
      // set token as object
      // localStorage.setItem('token', token)
      // const now = Date.now()
      // localStorage.setItem('issued', now)
      setAuth(AuthStates.FULFILLED)
    }
  }, [token])

  // this listens to auth and changes the isAuth state (bool)
  useEffect(() => {
    switch (auth) {
      case AuthStates.UNKNOWN:
        setIsAuth(false)
        break
      case AuthStates.EMPTY:
        setIsAuth(false)
        break
      case AuthStates.FULFILLED:
        setIsAuth(true)
        break
      case AuthStates.EXPIRED:
        setIsAuth(false)
        break
      default:
        setIsAuth(false)
        break
    }
  }, [auth])

  useEffect(() => {
    const localStorageToken = localStorage.getItem('token')
    if (localStorageToken) {
      const issued = localStorage.getItem('issued')
      const elapsed = getDateDiff(issued)
      console.log(elapsed)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setToken }}>
      { children }
    </AuthContext.Provider>
  )
}
