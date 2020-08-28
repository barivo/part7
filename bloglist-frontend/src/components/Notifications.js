import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'

const Notification = () => {
  const alert = useSelector(({ notifications }) => notifications)

  return alert.msg ? <Alert>{alert.msg}</Alert> : null
}

export default Notification
