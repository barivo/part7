import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const style = {
  border: 'solid',
  padding: 10,
  borderWidth: 1,
}

const Notification = () => {
  const dispatch = useDispatch()
  const alert = useSelector(({ notifications }) => notifications)

  useEffect(() => {
    if (alert.msg) dispatch(setNotification(alert.msg, 5))
  }, [dispatch, alert.msg])

  return alert.msg ? <div style={style}>{alert.msg}</div> : <div></div>
}

export default Notification
