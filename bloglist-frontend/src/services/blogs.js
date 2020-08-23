import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const addBlog = (blog, token) => {
  return axios
    .post(baseUrl, blog, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log('failed to create blog: ', error)
      return null
    })
}

const deleteBlog = (blogId, token) => {
  return axios
    .delete(`${baseUrl}/${blogId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log('failed to delete blog: ', error)
    })
}

const updateBlog = (blog, token) => {
  return axios
    .put(`${baseUrl}/${blog.id}`, blog, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log('failed to update blog: ', error)
      return null
    })
}

export default { getAll, addBlog, updateBlog, deleteBlog }
