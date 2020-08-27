import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Link, Route } from 'react-router-dom'
import Users from './Users'
import BlogList from './BlogList'
import Login from './Login'
import { logOut } from '../actions/creators/login'

const style = {
  margin: '10px',
}

const Menu = () => {
  const currentUser = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <div>
      <div style={{ padding: '5px', width: '100%', backgroundColor: 'grey' }}>
        <Link to="/" style={style}>
          home
        </Link>
        <Link to="/blogs" style={style}>
          blogs
        </Link>
        <Link to="/users" style={style}>
          users
        </Link>
        {currentUser.name && (
          <span style={style}>
            {currentUser.name} logged in{' '}
            <button onClick={handleLogout}>logout</button>
          </span>
        )}
      </div>

      <h2>blog app</h2>
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/blogs">
          <BlogList />
        </Route>
        <Route path="/">{!currentUser.name ? <Login /> : <BlogList />}</Route>
      </Switch>
    </div>
  )
}

export default Menu
