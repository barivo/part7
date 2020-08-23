import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addBlog = (blog, token) => {
  return axios
    .post(baseUrl, blog, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => response.data)
    .catch(error => {
      console.log('failed to create blog: ', error)
      return null
    })
}

export default { getAll, addBlog }
