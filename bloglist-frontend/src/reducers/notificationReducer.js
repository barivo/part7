const initialState = { type: '', data: '' }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE':
      return { type: action.type, data: action.data }
    case 'RESET':
      return initialState
    case 'ALERT':
      return { type: action.type, data: action.data }
    default:
      return state
  }
  //
}

let timer

export const setNotification = (msg, seconds, type = 'ALERT') => {
  return async dispatch => {
    if (timer) clearTimeout(timer)
    timer = await setTimeout(() => dispatch(resetNotification), seconds * 1000)
    if (type === 'VOTE') {
      dispatch(votedOn(msg))
    } else {
      dispatch(sendAlert({ type: 'ALERT', data: msg }))
    }
  }
}

export const votedOn = data => ({
  type: 'VOTE',
  data,
})

export const resetNotification = { type: 'RESET' }

export const sendAlert = data => ({
  type: 'ALERT',
  data,
})

export default reducer
