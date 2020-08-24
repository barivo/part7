/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBlog, updateBlog } from '../actions/creators/blogs'
import { setNotification } from '../reducers/notificationReducer'

const Blog = ({ blog }) => {
  const currentUser = useSelector(({ user }) => user)
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id, currentUser))
  }

  const handleLike = async () => {
    const { likes, ...rest } = blog
    const updated = { likes: likes + 1, ...rest }
    const result = await dispatch(updateBlog(updated, currentUser))
    if (result) {
      dispatch(setNotification('update succeeded!', 3))
    } else {
      dispatch(setNotification('update failed!', 3))
    }
  }

  return (
    <div>
      {blog.title} {blog.author}
      <br />
      {blog.likes} likes <button onClick={handleLike}>like!</button>{' '}
      <button onClick={handleDelete}>delete</button>
      <br />
      <br />
    </div>
  )
}
export default Blog
