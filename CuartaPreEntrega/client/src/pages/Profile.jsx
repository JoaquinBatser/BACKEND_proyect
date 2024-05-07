import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { sendPassswordChangeEmail } from '../api/fetch'
import Documents from '../components/user/Documents'

const Profile = () => {
  const { user } = useContext(UserContext)

  const uploadProfilePicture = async () => {}
  return (
    <div>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <p>{user.email}</p>
      <NavLink to="/newProduct">Add product</NavLink>

      <Documents />
    </div>
  )
}

export default Profile
