import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getRequest } from '../helpers/apiCalls'
import Blogs from '../components/Blogs'

export default function Home () {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    getRequest('/blogs', setBlogs)
  }, [])

  return (
    <>
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Blogs
        blogs={blogs}
      />
    </>
  )
}
