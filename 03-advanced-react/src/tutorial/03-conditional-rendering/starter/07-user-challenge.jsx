import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)
  const userObj = { username: 'Brett' }

  const Login = () => {
    return (
      <div>
        <h4>Hello There, {user.username}</h4>

        <button className='btn' onClick={() => setUser(null)}>
          Logout
        </button>
      </div>
    )
  }

  const Logout = () => {
    return (
      <div>
        <h4>Please Login</h4>

        <button className='btn' onClick={() => setUser(userObj)}>
          Login
        </button>
      </div>
    )
  }

  return <div>{user ? <Login /> : <Logout />}</div>
}

export default UserChallenge
