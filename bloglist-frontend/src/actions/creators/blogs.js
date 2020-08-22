import blogServices from '../../services/blogs'

export const initializeBlogs = () => {
  return async dispatch => {
    const data = await blogServices.getAll()
    dispatch({
      type: 'INIT',
      data,
    })
  }
}
