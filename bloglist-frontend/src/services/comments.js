const { default: Axios } = require('axios')

const baseUrl = '/api/blogs'

const getAll = async (blogId) => {
  return await Axios.get(`${baseUrl}/${blogId}/comments`).then(
    (request) => request.data
  )
}

const addComment = async (blogId, text) => {
  return await Axios.post(`${baseUrl}/${blogId}/comments`, { text })
    .then((response) => response.data)
    .catch((error) => {
      console.log('comment was not added: ', error)
    })
}

const deleteComment = async (blogId, id) => {
  return await Axios.delete(`${baseUrl}/${blogId}/comment/${id}`).then(
    (response) => response.data
  )
}

export default { getAll, addComment, deleteComment }
