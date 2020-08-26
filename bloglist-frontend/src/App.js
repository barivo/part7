import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Menu from './components/Menu'
import Users from './components/Users'
import BlogList from './components/BlogList'
import Notification from './components/Notifications'
import Login from './components/Login'
import CreateBlog from './components/CreateBlog'

import { initializeBlogs } from './actions/creators/blogs'
import { currentlyLoggedIn } from './actions/creators/login'
import { getAll } from './reducers/usersReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(currentlyLoggedIn())
    dispatch(getAll())
  }, [dispatch])

  return (
    <div>
      <Login />
      <Notification />
      <Users />
      <BlogList />
      <CreateBlog />
    </div>
  )
}

export default App
