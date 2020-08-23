const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const user = action.data
      saveUserToLocalStorage(user)
      return user
    }
    case 'LOGGEDIN-USER':
      return action.user
    case 'LOG-OUT':
      clearLocalStorage()
      return {}
    default:
      return state
  }
}

const saveUserToLocalStorage = (user) => {
  localStorage.setItem('loggedInUser', JSON.stringify(user))
}

const clearLocalStorage = () => {
  localStorage.clear()
}

export default reducer
