import './styles.css'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import LinkBox from './LinkBox'
import Auth from './Auth'
import Blogs from './Blogs'
import UserBlogs from './UserBlogs'
import BlogEdit from './BlogEdit'
import AddBlog from './AddBlog'
import BlogDelete from './BlogDelete'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store'

function App () {
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  const dispatch = useDispatch()

  useEffect(() => {
    const user = localStorage.getItem('userId')
    user && dispatch(authActions.login())
  }, [])

  return (
    <>
      <Navbar />
      {isLoggedIn &&
        <LinkBox />
      }
      <main className={isLoggedIn ? 'main logged' : 'main not-logged'}>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/my-blogs' element={<UserBlogs />} />
          <Route path='/blog-edit/:id' element={<BlogEdit />} />
          <Route path='/blog-delete/:id' element={<BlogDelete />} />
          <Route path='/add' element={<AddBlog />} />
        </Routes>
      </main>
    </>
  )
}

export default App
