import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function useAuth () {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    !isLoggedIn && navigate('/')
  }, [])
}
