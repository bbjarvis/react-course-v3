import { useEffect, useState } from 'react'

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false)
  const message = 'hello world'

  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        Toggle Alert
      </button>
      {toggle && <div className='alert alert-danger'>{message}</div>}
    </div>
  )
}

export default ToggleChallenge
