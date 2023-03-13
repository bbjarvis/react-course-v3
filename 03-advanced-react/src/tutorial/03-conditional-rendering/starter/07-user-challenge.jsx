import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)
  const userObj = { username: 'Brett' }

  const login = () => {
    return setUser(null)
  }

  const logout = () => {
    return setUser(userObj)
  }

  return (
    <div>
      {user ? (
        <div>
          <h4>Hello There, {user.username}</h4>

          <button className='btn' onClick={login}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>

          <button className='btn' onClick={logout}>
            Login
          </button>
        </div>
      )}
    </div>
  )
}

export default UserChallenge
