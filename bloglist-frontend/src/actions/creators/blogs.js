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

export const addBlog = (blog, user) => {
  return async (dispatch) => {
    const newBlog = await blogServices.addBlog(blog, user.token)
    if (newBlog) {
      dispatch({ type: 'ADD', data: newBlog })
      dispatch({ type: 'ALERT', data: { msg: 'created new blog!' } })
    } else {
      dispatch({ type: 'ALERT', data: 'failed to create blog' })
    }
  }
}

export const deleteBlog = (id, user) => {
  return async (dispatch) => {
    const responseStatus = await blogServices.deleteBlog(id, user.token)
    if (responseStatus === 204) {
      dispatch({ type: 'DELETE', data: id })
      dispatch({ type: 'ALERT', data: { msg: 'deleted blog!' } })
    } else {
      dispatch({ type: 'ALERT', data: { msg: 'failed to delete blog!' } })
    }
  }
}

export const updateBlog = (blog, user) => {
  return async (dispatch) => {
    const updated = await blogServices.updateBlog(blog, user.token)
    if (updated) {
      dispatch({ type: 'UPDATE', data: updated })
      dispatch({ type: 'ALERT', data: { msg: 'updated blog!' } })
    } else {
      dispatch({ type: 'ALERT', data: { msg: 'failed to update blog!' } })
    }
  }
}
