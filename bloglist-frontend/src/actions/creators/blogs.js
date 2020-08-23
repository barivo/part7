import blogServices from '../../services/blogs'
import { useSelector } from 'react-redux'

export const initializeBlogs = () => {
  return async dispatch => {
    const data = await blogServices.getAll()
    dispatch({
      type: 'INIT',
      data,
    })
  }
}

export const addBlog = (title, author, url, user) => {
  return async dispatch => {
    const newBlog = await blogServices.addBlog(
      { user: [user.id], title, author, url, likes: 0 },
      user.token
    )
    dispatch({ type: 'ADD', data: newBlog })
  }
}
