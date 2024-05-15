import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { logout, sendPassswordChangeEmail } from '../api/fetch'
import Documents from '../components/user/Documents'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import DeleteUser from '../components/user/DeleteUser'
import UsersList from '../components/user/UsersList'

const Profile = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const logoutFn = async () => {
    try {
      const logoutRes = await logout()
      console.log('logout')
      if (logoutRes.data.success) {
        localStorage.removeItem('user')
        navigate('/')
        window.location.reload(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const uploadProfilePicture = async () => {}
  return (
    <>
      {user ? (
        <div className="pt-11 px-12">
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
          <p>{user.email}</p>
          {user.role === 'admin' && (
            <NavLink to="/newProduct">Add product</NavLink>
          )}
          <button onClick={logoutFn}>Logout</button>

          <Documents />
          {user.role === 'admin' && <UsersList />}
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  )
}

export default Profile
