/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllComments, addComment } from '../reducers/commentReducer'
import { useRouteMatch } from 'react-router-dom'
import { useField } from '../hooks/index'

const Comment = () => {
  const match = useRouteMatch('/blogs/:id')
  const blogId = match.params.id
  const dispatch = useDispatch()
  const comments = useSelector(({ comments }) => comments)

  useEffect(() => {
    dispatch(getAllComments(blogId))
  }, [dispatch, blogId])

  const ref = useRef()
  const comment = useField('text', ref)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addComment(blogId, comment.value))
    ref.current.reset()
  }

  const commentsList = (comments) => {
    const list = comments
      .sort((a, b) => b._id - a._id)
      .map((c) => <li key={c._id}> {c.text} </li>)
    return <ul>{list}</ul>
  }

  return (
    <div>
      <h3>comments</h3>
      <form onSubmit={handleSubmit}>
        <input id="comment" {...comment} />
        <button>add comment</button>
      </form>
      <br />
      {commentsList(comments)}

      <br />
    </div>
  )
}
export default Comment
