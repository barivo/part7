import blogServices from '../services/blogs'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.data
    case 'ADD':
      const newBlog = action.data
      return [...state, newBlog]
    default:
      return state
  }
}

export default reducer
