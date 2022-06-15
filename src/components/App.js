import './styles.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import LinkBox from './LinkBox'
import Auth from './Auth'
import Blogs from './Blogs'
import UserBlogs from './UserBlogs'
import BlogDetail from './BlogDetail'
import AddBlog from './AddBlog'
import { useSelector } from 'react-redux'

function App () {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  console.log(isLoggedIn)

  return (
    <>
      <Navbar />
      {
        isLoggedIn &&
        <LinkBox />
      }
      <main className={isLoggedIn ? 'main logged' : 'main not-logged'}>
        <Routes>
          <Route path='/' element={<h1>home</h1>} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/my-blogs' element={<UserBlogs />} />
          <Route path='/my-blogs/:id' element={<BlogDetail />} />
          <Route path='/blogs/add' element={<AddBlog />} />
        </Routes>
      </main>
    </>
  )
}

export default App
