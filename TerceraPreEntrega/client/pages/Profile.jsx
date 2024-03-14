import React, { useContext } from 'react'
import UserContext from '../src/context/UserContext'

const Profile = () => {
  const { user } = useContext(UserContext)
  console.log(user)
  return (
    <p>
      {user.first_name}
      {user.last_name}
    </p>
  )
}

export default Profile
