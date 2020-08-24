import Axios from 'axios'
const baseUrl = '/api/users'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL-USERS':
      return action.data
    case 'ADD-USER': {
      return []
    }
    case 'UPDATE-USER': {
      return []
    }
    default:
      return state
  }
}

export const getAll = () => {
  return async (dispatch) => {
    const data = await getAllfromApi()
    dispatch({ type: 'ALL-USERS', data })
  }
}

const getAllfromApi = () => {
  return Axios.get(baseUrl)
    .then((response) => response.data)
    .catch((error) => {
      console.log('failed to get list of users from api', error)
      return null
    })
}

export default reducer
