import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAll } from '../reducers/usersReducer'

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(({ users }) => users)

  useEffect(() => {
    dispatch(getAll())
  }, [dispatch])

  return (
    <div>
      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th colSpan="1">full name</th>
            <th colSpan="1">blogs created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
