import React from 'react'
import { useSelector } from 'react-redux'
const style = {
  border: 'solid',
  padding: 10,
  borderWidth: 1,
}

const Notification = () => {
  const notifications = useSelector(({ notifications }) => notifications.data)
  const data = notifications.data

  return data ? <div style={style}>{data}</div> : <div></div>
}

export default Notification
