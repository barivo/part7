import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useField } from '../hooks/index.js'
import blogServices from '../services/blogs'
import { setNotification } from '../reducers/notificationReducer'
import { addBlog } from '../actions/creators/blogs'

const CreateBlog = () => {
  const dispatch = useDispatch()
  const tref = useRef()
  const aref = useRef()
  const uref = useRef()

  const currentUser = useSelector(({ user }) => user)

  const title = useField('text', tref)
  const author = useField('text', aref)
  const url = useField('text', uref)

  const handleSubmit = e => {
    e.preventDefault()
    if (currentUser.username) {
      dispatch(addBlog(title.value, author.value, url.value, currentUser))
    } else {
      dispatch(setNotification('you must be logged in to create a new blog', 3))
    }
    tref.current.reset()
    aref.current.reset()
    uref.current.reset()
  }

  return (
    <div>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        title
        <input {...title} />
        <br />
        author
        <input {...author} />
        <br />
        url
        <input {...url} />
        <br />
        <button>create</button>
        <br />
      </form>
      <br />
    </div>
  )
}

export default CreateBlog
