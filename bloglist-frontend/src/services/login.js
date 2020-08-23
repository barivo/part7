import axios from 'axios'
const baseUrl = '/api/login'

const login = ({ username, password }) => {
  const request = axios.post(baseUrl, { username, password })
  const user = request.then(response => response.data)

  return user
}

export default { login }
