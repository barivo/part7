const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT': {
      const withPopulatdUser = action.data
      const withIdsOnly = withPopulatdUser.map((blog) => {
        const { user, ...rest } = blog
        return { ...rest, user: [user[0].id] }
      })
      return withIdsOnly
    }
    case 'ADD': {
      const newBlog = action.data
      return [...state, newBlog]
    }
    case 'UPDATE': {
      const changedBlog = action.data
      const updatedBlogs = state.filter((blogs) => blogs.id !== changedBlog.id)
      return [...updatedBlogs, changedBlog]
    }
    case 'DELETE': {
      const deletedId = action.data
      const updatedBlogs = state.filter((blogs) => blogs.id !== deletedId)
      return [...updatedBlogs]
    }
    default:
      return state
  }
}

export default reducer
