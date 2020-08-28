import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = async () => {
  return await axios.get(baseUrl).then((response) => response.data)
}

const addBlog = async (blog, token) => {
  return await axios
    .post(baseUrl, blog, {
      headers: { Authorization: `bearer ${token}` },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log('failed to create blog: ', error)
    })
}

const deleteBlog = async (blogId, token) => {
  return await axios
    .delete(`${baseUrl}/${blogId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.status)
    .catch((error) => {
      console.log('failed to delete blog: ', error)
    })
}

const updateBlog = async (blog, token) => {
  const updated = {
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: blog.likes,
  }
  return await axios
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
