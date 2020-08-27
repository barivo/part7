/* eslint-disable react/prop-types */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBlog, updateBlog } from '../actions/creators/blogs'

const Blog = ({ blog }) => {
  const history = useHistory()
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
      <h2>{blog.title}</h2>
      <a href={blog.url} target="_blank" rel="noopener noreferrer">
        {blog.url}
      </a>
      <br />
      {blog.likes} likes <button onClick={handleLike}>like!</button>
      <br />
      added by <span style={{ fontSize: '18px' }}>{blog.author}</span>
      <br />
      <button onClick={handleDelete}>delete</button>
      <br />
      <button onClick={() => history.push('/blogs')}>go back</button>
      <br />
    </div>
  )
}
export default Blog
