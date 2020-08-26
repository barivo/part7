import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const addBlog = (blog, token) => {
  return axios
    .post(baseUrl, blog, {
      headers: { Authorization: `bearer ${token}` },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log('failed to create blog: ', error)
    })
}

const deleteBlog = (blogId, token) => {
  return axios
    .delete(`${baseUrl}/${blogId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.status)
    .catch((error) => {
      console.log('failed to delete blog: ', error)
    })
}

const updateBlog = (blog, token) => {
  const updated = {
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: blog.likes,
  }
  return axios
    .put(`${baseUrl}/${blog.id}`, updated, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log('failed to update blog: ', error)
    })
}

export default { getAll, addBlog, updateBlog, deleteBlog }
