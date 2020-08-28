import commentsService from '../services/comments'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL-COMMENTS':
      return action.data
    case 'ADD-COMMENT': {
      const newComment = action.data
      return [...state, newComment]
    }
    case 'DELETE-COMMENT': {
      return []
    }
    default:
      return state
  }
}

export const getAllComments = (blogId) => {
  return async (dispatch) => {
    const data = await commentsService.getAll(blogId)
    dispatch({ type: 'ALL-COMMENTS', data })
  }
}
export const addComment = (blogId, text) => {
  return async (dispatch) => {
    const data = await commentsService.addComment(blogId, text)
    dispatch({ type: 'ADD-COMMENT', data })
  }
}

export default reducer
