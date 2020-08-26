import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useRouteMatch,
} from 'react-router-dom'
import Users from './Users'

const Menu = () => {
  return (
    <div>
      <Link to="/users"> users</Link>
      <Link to="/blogs"> blogs</Link>

      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/blogs">blogs ...</Route>
      </Switch>
    </div>
  )
}

export default Menu
