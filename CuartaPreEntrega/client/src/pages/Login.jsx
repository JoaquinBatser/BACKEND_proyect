import React, { useContext, useState } from 'react'
import { getUser, logout, sendPassswordChangeEmail } from '../api/fetch'
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
      localStorage.setItem('user', JSON.stringify(fetchUser.data.user))
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
      <div className=" flex justify-center items-center flex-col text-center w-[600px]  m-auto mt-24 rounded-3xl shadow-2xl py-11 px-20">
        <img src={lock} alt="" className="h-56" />
        <form className=" w-full mb-6" id="login-html" onSubmit={logUser}>
          <h2 className="font-medium text-2xl mb-11">
            Login using your email and password
          </h2>
          <div>
            <input
              className=" w-full focus:outline-0 transition-all border border-neutral-300 focus:border-blue-500 rounded-md px-4 py-2 mb-4"
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
              className=" w-full focus:outline-0 transition-all border border-neutral-300 focus:border-blue-500 rounded-md px-4 py-2"
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
            className="bg-blue-500 hover:bg-blue-600 transition-all text-white font-medium rounded-md px-10 py-1 mt-6"
            type="submit"
          >
            Login
          </button>
        </form>
        <button
          className=" hover:underline text-blue-500 mb-1"
          onClick={ForgotPassword}
        >
          Forgot password?
        </button>
        <div className=" hover:underline text-blue-500">
          <NavLink to="/signup">Create account</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Login
