import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useField } from '../hooks/index.js'
import { logIn, logOut } from '../actions/creators/login'
import { TextField, Button } from '@material-ui/core'

const Login = () => {
  const currentUser = useSelector(({ user }) => user)

  const dispatch = useDispatch()
  const usernameRef = useRef()
  const passwordRef = useRef()

  const username = useField('text', usernameRef)
  const password = useField('password', passwordRef)

  const sendLoginData = (username, password) =>
    dispatch(logIn(username, password))

  const handleSubmit = (e) => {
    e.preventDefault()
    sendLoginData(username.value, password.value)
    usernameRef.current.reset()
    passwordRef.current.reset()
  }
  const handleLogout = () => {
    dispatch(logOut())
  }

  return currentUser.name ? (
    <div>
      <p>{currentUser.name} logged in</p>
      <button onClick={handleLogout}>logout</button>
    </div>
  ) : (
    <div>
      <h2>login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField {...username} label="username" />
        </div>
        <div>
          <TextField {...password} label="password" type="password" />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            login
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Login
