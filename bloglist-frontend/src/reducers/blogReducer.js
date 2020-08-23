import { setNotification } from './notificationReducer'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.data
    case 'ADD': {
      const newBlog = action.data
      return [...state, newBlog]
    }
    case 'UPDATE': {
      const changedBlog = action.data
      const updatedBlogs = state.filter((blogs) => blogs.id !== changedBlog.id)
      return [...updatedBlogs, changedBlog]
    }
    default:
      return state
  }
}

export default reducer
