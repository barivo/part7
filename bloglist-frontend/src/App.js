import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Blog from './components/Blog'
import Notification from './components/Notifications'
import Login from './components/Login'
import CreateBlog from './components/CreateBlog'
import { initializeBlogs } from './actions/creators/blogs'
import { setNotification } from './reducers/notificationReducer'
import { currentlyLoggedIn } from './actions/creators/login'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(currentlyLoggedIn())
    dispatch(initializeBlogs())
  }, [dispatch])

  const blogs = useSelector(({ blogs }) => blogs)

  return (
    <div>
      <Login />
      <Notification />
      <h2>blogs</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
      <CreateBlog />
    </div>
  )
}

export default App
