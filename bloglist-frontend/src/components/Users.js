import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Link, Route } from 'react-router-dom'

import User from './User'

const Users = () => {
  const users = useSelector(({ users }) => users)
  const blogs = useSelector(({ blogs }) => blogs)
  const numBlogsCreated = (id) => blogs.filter((b) => b.user[0] === id).length

  const showTable = (users) => (
    <table>
      <thead>
        <tr>
          <th>full name</th>
          <th>blogs created</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              <Link to={`/users/${user.id}`}>{user.name}</Link>{' '}
            </td>
            <td>{numBlogsCreated(user.id)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    <div>
      <Switch>
        <Route path="/users/:id">
          <User />
        </Route>
        <Route path="/"></Route>
      </Switch>
      <h3>Users</h3>
      {showTable(users)}
    </div>
  )
}

export default Users
