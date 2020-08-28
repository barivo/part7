import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Link, Route } from 'react-router-dom'
import Users from './Users'
import BlogList from './BlogList'
import CreateBlog from './CreateBlog'
import Login from './Login'
import { logOut } from '../actions/creators/login'
import { AppBar, Toolbar, Button } from '@material-ui/core'

const Menu = () => {
  const currentUser = useSelector(({ user }) => user)
  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logOut())

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            home
          </Button>
          <Button color="inherit" component={Link} to="/blogs">
            blogs
          </Button>

          <Button color="inherit" component={Link} to="/users">
            users
          </Button>
          {currentUser.name ? (
            <>
              <em>{currentUser.name} logged in</em>

              <Button onClick={handleLogout} color="inherit">
                {' '}
                logout{' '}
              </Button>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <br />
      <br />
      <Switch>
        <Route path="/blogs/create" component={CreateBlog} />
        <Route path="/users" component={Users} />
        <Route path="/blogs" component={BlogList} />
        <Route path="/" component={!currentUser.name ? Login : BlogList} />
      </Switch>
    </div>
  )
}

export default Menu
