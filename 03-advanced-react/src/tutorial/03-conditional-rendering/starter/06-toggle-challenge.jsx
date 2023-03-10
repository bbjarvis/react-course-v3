import { useEffect, useState } from 'react'
const message = 'hello world'
const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        Toggle Alert
      </button>
      {toggle && <Alert />}
    </div>
  )
}

const Alert = () => {
  return <div className='alert alert-danger'>{message}</div>
}
export default ToggleChallenge
