import React, { useContext, useState } from 'react'
import { getUser } from '../src/api/fetch'
import UserContext from '../src/context/UserContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { login } = useContext(UserContext)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const loginUser = async (e) => {
    e.preventDefault()
    const loginUser = { user: user, password: password }
    const fetchUser = await getUser({ loginUser })
    console.log(fetchUser)
    if (fetchUser.data.success) {
      login(fetchUser.data.user)
    }
    fetchUser.data.success ? navigate('/') : console.log('NUUH')
  }

  return (
    <form id="signup-html" onSubmit={loginUser}>
      <h2>Login</h2>
      <div>
        <label htmlFor="user">user:</label>
        <input
          type="text"
          id="user"
          name="user"
          onChange={(e) => {
            setUser(e.target.value)
          }}
        />
      </div>

      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <button id="signup" type="submit">
        Register
      </button>
    </form>
  )
}

export default Login
