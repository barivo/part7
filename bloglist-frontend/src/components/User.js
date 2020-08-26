import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'

const User = () => {
  const match = useRouteMatch('/users/:id')
  const history = useHistory()
  const paramsId = match.params.id
  const user = useSelector(({ users }) => {
    return users.filter((u) => u.id === paramsId)[0]
  })

  const blogs = useSelector(({ blogs }) => {
    return blogs.filter((b) => b.user[0] === paramsId)
  })

  if (!user) {
    return null
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>added blogs</h3>
      <ul>
        {blogs
          .sort((a, b) => b.likes - a.likes)
          .map((blog) => (
            <li key={blog.id}>{blog.title}</li>
          ))}
      </ul>
      <button onClick={() => history.push('/')}>go back</button>
    </div>
  )
}

export default User
