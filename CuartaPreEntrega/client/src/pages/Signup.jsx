import React, { useContext, useState } from 'react'
import { signupUser } from '../api/fetch'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import avatar from '../public/avatar.png'

const Signup = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signupNewUser = async (e) => {
    e.preventDefault()
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      age: age,
    }
    const user = await signupUser(newUser)
    console.log('signup', user)
    if (user.data.success) {
      setUser(user.data.user)
      navigate('/login')
    }
    console.log(user)
    const { data } = user

    data.success ? navigate('/') : console.log('NUUH')
  }

  return (
    <section className="mt-11 h-full">
      <div className=" flex justify-center items-center flex-col text-center w-[600px]  m-auto mt-24 rounded-3xl shadow-2xl py-11 px-20">
        <img src={avatar} alt="" className="h-56" />
        <form
          className="w-full  text-center"
          id="signup-html"
          onSubmit={signupNewUser}
        >
          <h2 className="font-medium text-2xl mb-11">Create a new account</h2>
          <div>
            <input
              className=" w-full focus:outline-0 transition-all border border-neutral-300 focus:border-blue-500 rounded-md px-4 py-2 mb-4"
              placeholder="Name"
              type="text"
              id="first_name"
              name="first_name"
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
          </div>
          <div>
            <input
              className=" w-full focus:outline-0 transition-all border border-neutral-300 focus:border-blue-500 rounded-md px-4 py-2 mb-4"
              placeholder="LastName"
              type="text"
              id="last_name"
              name="last_name"
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>
          <div>
            <input
              className=" w-full focus:outline-0 transition-all border border-neutral-300 focus:border-blue-500 rounded-md px-4 py-2 mb-4"
              placeholder="Age"
              type="number"
              id="age"
              name="age"
              onChange={(e) => {
                setAge(e.target.value)
              }}
            />
          </div>
          <div>
            <input
              className=" w-full focus:outline-0 transition-all border border-neutral-300 focus:border-blue-500 rounded-md px-4 py-2 mb-4"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div>
            <input
              className=" w-full focus:outline-0 transition-all border border-neutral-300 focus:border-blue-500 rounded-md px-4 py-2 mb-4"
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
            id="signup"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  )
}

export default Signup
