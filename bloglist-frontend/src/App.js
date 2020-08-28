import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Menu from './components/Menu'
import Notification from './components/Notifications'
import Container from '@material-ui/core/Container'

import { initializeBlogs } from './actions/creators/blogs'
import { currentlyLoggedIn } from './actions/creators/login'
import { getAll } from './reducers/usersReducer'

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import './App.css'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(currentlyLoggedIn())
    dispatch(getAll())
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div>
          <Notification />
          <Menu />
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
