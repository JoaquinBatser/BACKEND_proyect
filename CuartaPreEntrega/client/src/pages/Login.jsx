import React, { useContext, useState } from 'react'
import { getUser, sendPassswordChangeEmail } from '../api/fetch'
import { loginUser } from '../api/fetch'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const logUser = async (e) => {
    e.preventDefault()

    const userData = { email, password }
    const fetchUser = await loginUser({ userData })
    console.log(fetchUser)
    if (fetchUser.data.success) {
      setUser(fetchUser.data.user)
      navigate('/')
    } else {
      console.log('NUUH')
    }
  }

  const ForgotPassword = async () => {
    try {
      console.log('fetch', email)
      const updateData = await sendPassswordChangeEmail(email)
      console.log(updateData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <form id="signup-html" onSubmit={logUser}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">User:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value)
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
          <button onClick={ForgotPassword}>Forgot password?</button>
        </div>
        <button type="submit">Login</button>
      </form>
    </section>
  )
}

export default Login
