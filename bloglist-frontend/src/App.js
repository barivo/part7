import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Users from './components/Users'
import Blog from './components/Blog'
import Notification from './components/Notifications'
import Login from './components/Login'
import CreateBlog from './components/CreateBlog'

import { initializeBlogs } from './actions/creators/blogs'
import { currentlyLoggedIn } from './actions/creators/login'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  useEffect(() => {
    dispatch(currentlyLoggedIn())
  }, [dispatch])

  const blogs = useSelector(({ blogs }) => blogs)

  return (
    <div>
      <Login />
      <Notification />
      <Users />
      <h2>blogs</h2>
      {blogs
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      <CreateBlog />
    </div>
  )
}

export default App
