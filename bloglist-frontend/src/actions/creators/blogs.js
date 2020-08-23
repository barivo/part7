import blogServices from '../../services/blogs'

export const initializeBlogs = () => {
  return async (dispatch) => {
    const data = await blogServices.getAll()
    dispatch({
      type: 'INIT',
      data,
    })
  }
}

export const addBlog = (title, author, url, user) => {
  return async (dispatch) => {
    const newBlog = await blogServices.addBlog(
      { user: [user.id], title, author, url, likes: 0 },
      user.token
    )
    dispatch({ type: 'ADD', data: newBlog })
  }
}

export const deleteBlog = (id, user) => {
  return async (dispatch) => {
    const blog = await blogServices.deleteBlog(id, user.token)
    dispatch({ type: 'DELETE', data: id })
  }
}

export const updateBlog = (blog, user) => {
  return async (dispatch) => {
    const updated = await blogServices.updateBlog(blog, user.token)
    if (updated) dispatch({ type: 'UPDATE', data: updated })
  }
}
