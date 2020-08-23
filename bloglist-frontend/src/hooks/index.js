import { useState, useImperativeHandle } from 'react'

export const useField = (type, ref) => {
  const [value, setValue] = useState('')
  const onChange = e => {
    setValue(e.target.value)
  }
  const reset = () => setValue('')

  useImperativeHandle(ref, () => {
    return {
      reset,
    }
  })

  return {
    type,
    value,
    onChange,
  }
}
