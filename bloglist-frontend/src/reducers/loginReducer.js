const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      const user = action.data
      saveUserToLocalStorage(user)
      return user
    case 'LOG-OUT':
      clearLocalStorage()
      return {}
    default:
      return state
  }
}

const saveUserToLocalStorage = user => {
  localStorage.setItem('loggedInUser', JSON.stringify(user))
}

const clearLocalStorage = () => {
  localStorage.clear()
}

const getLocalUser = () => {
  return JSON.parse(localStorage.getItem('loggedInUser'))
}

export default reducer
