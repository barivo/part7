/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBlog, updateBlog } from '../actions/creators/blogs'

const Blog = ({ blog }) => {
  const currentUser = useSelector(({ user }) => user)
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id, currentUser))
  }

  const handleLike = async () => {
    const { likes, ...rest } = blog
    const updated = { ...rest, likes: likes + 1 }
    dispatch(updateBlog(updated, currentUser))
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
