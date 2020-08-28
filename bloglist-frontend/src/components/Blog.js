/* eslint-disable react/prop-types */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBlog, updateBlog } from '../actions/creators/blogs'
import Comments from './Comments'
import { setNotification } from '../reducers/notificationReducer'

import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

const Blog = ({ blog }) => {
  const history = useHistory()
  const currentUser = useSelector(({ user }) => user)
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id, currentUser))
  }

  const handleLike = () => {
    const { likes, ...rest } = blog
    const updated = { ...rest, likes: likes + 1 }
    dispatch(updateBlog(updated, currentUser))
    dispatch(setNotification('updated blog', 3))
  }

  if (!blog) {
    setTimeout(() => {
      history.push('/blogs')
    }, 1)
    return null
  }

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        {blog.title}
      </Typography>
      <Typography variant="h5" gutterBottom style={{ width: '50%' }}>
        <a href={blog.url} target="_blank" rel="noopener noreferrer">
          {' '}
          {blog.url}{' '}
        </a>
      </Typography>
      <br /> <br />
      <Typography variant="h6" gutterBottom>
        <em>{blog.likes} </em>likes
        <Button
          style={{ marginLeft: '10px', fontSize: 'small' }}
          onClick={handleLike}
          variant="contained"
          color="primary"
        >
          like!
        </Button>
      </Typography>
      <Typography variant="h6" gutterBottom>
        added by {blog.author}{' '}
      </Typography>
      <br />
      <Button onClick={handleDelete} variant="contained" color="secondary">
        delete
      </Button>
      <Button
        style={{ marginLeft: '20px' }}
        onClick={() => history.push('/blogs')}
        variant="contained"
        color="primary"
      >
        go back
      </Button>
      <br />
      <Comments />
    </div>
  )
}
export default Blog
