import loginServices from '../../services/login'

export const logIn = (username, password) => {
  return async (dispatch) => {
    const data = await loginServices.login({ username, password })
    dispatch({
      type: 'LOGIN',
      data,
    })
  }
}

export const logOut = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOG-OUT',
    })
  }
}
export const currentlyLoggedIn = () => {
  return (dispatch) => {
    const temp = localStorage.getItem('loggedInUser')
    const user = temp ? JSON.parse(temp) : {}
    dispatch({
      type: 'LOGGEDIN-USER',
      user,
    })
  }
}
