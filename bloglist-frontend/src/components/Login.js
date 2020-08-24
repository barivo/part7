import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useField } from '../hooks/index.js'
import { logIn, logOut } from '../actions/creators/login'

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
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        username: mluukkai , samisami
        <br />
        <input id="username" {...username} />
        <br />
        password
        <br />
        <input id="password" {...password} />
        <br />
        <button>login</button>
        <br />
      </form>
      <br />
    </div>
  )
}

export default Login
