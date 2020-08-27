import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Menu from './components/Menu'
import Notification from './components/Notifications'

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
      <Menu />
      <Notification />
    </div>
  )
}

export default App
