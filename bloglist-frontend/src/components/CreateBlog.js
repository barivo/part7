import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useField } from '../hooks/index.js'
import { setNotification } from '../reducers/notificationReducer'
import { addBlog } from '../actions/creators/blogs'

const CreateBlog = () => {
  const dispatch = useDispatch()
  const tref = useRef()
  const aref = useRef()
  const uref = useRef()

  const currentUser = useSelector(({ user }) => user)
  const history = useHistory()

  const title = useField('text', tref)
  const author = useField('text', aref)
  const url = useField('text', uref)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentUser.username) {
      dispatch(
        addBlog(
          {
            title: title.value,
            author: author.value,
            url: url.value,
          },
          currentUser
        )
      )
      dispatch(setNotification('created blog!', 3))
      setTimeout(() => {
        history.push('/blogs')
      }, 500)
    } else {
      dispatch(setNotification('you must be logged in to create a new blog', 3))
    }
    // tref.current.reset()
    // aref.current.reset()
    // uref.current.reset()
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
