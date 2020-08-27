const initialState = { msg: '', seconds: 3, alertType: 'INFO' }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET':
      return initialState
    case 'ALERT':
      return {
        msg: action.data.msg,
        seconds: action.data.seconds ? action.data.seconds : 3,
        alertType: action.data.alertType ? action.data.alertType : 'INFO',
      }
    default:
      return state
  }
  //
}

let timer

export const setNotification = (msg, seconds, alertType = 'INFORMATION') => {
  return async (dispatch) => {
    dispatch({ type: 'ALERT', data: { msg, seconds, alertType } })

    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      dispatch({ type: 'RESET' })
    }, seconds * 1000)
  }
}

export default reducer
