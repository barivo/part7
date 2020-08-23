import loginServices from '../../services/login'

export const logIn = (username, password) => {
  return async dispatch => {
    const data = await loginServices.login({ username, password })
    dispatch({
      type: 'LOGIN',
      data,
    })
  }
}

export const logOut = () => {
  return dispatch => {
    dispatch({
      type: 'LOG-OUT',
    })
  }
}
