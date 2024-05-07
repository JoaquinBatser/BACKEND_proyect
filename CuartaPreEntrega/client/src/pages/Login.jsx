import React, { useContext, useState } from 'react'
import { getUser, sendPassswordChangeEmail } from '../api/fetch'
import { NavLink } from 'react-router-dom'
import { loginUser } from '../api/fetch'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import lock from '../public/lock.png'

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
    <section className="mt-11 h-full">
      <div className=" flex justify-center items-center flex-col text-center w-[600px]  m-auto mt-24 rounded-3xl shadow-lg py-11">
        <img src={lock} alt="" className="h-72" />
        <form className="mb-6" id="login-html" onSubmit={logUser}>
          <h2 className="font-bold text-xl mb-4">
            Login using your email and password
          </h2>
          <div>
            <input
              className=" focus:outline-blue-400   focus:ring-1 mb-2 rounded-3xl px-6 py-2"
              placeholder="Email"
              type="text"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>

          <div>
            <input
              className=" focus:outline-blue-400  focus:ring-1 mb-2 rounded-3xl  px-6 py-2"
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <button
            className="mt-4 bg-sky-300 font-bold text-white tracking-wide rounded-3xl  hover:shadow px-8 py-2  transition-all"
            type="submit"
          >
            Login
          </button>
        </form>
        <button
          className=" hover:underline text-sky-500"
          onClick={ForgotPassword}
        >
          Forgot password?
        </button>
        <div className=" hover:underline text-sky-500">
          <NavLink to="/signup">Create account</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Login
