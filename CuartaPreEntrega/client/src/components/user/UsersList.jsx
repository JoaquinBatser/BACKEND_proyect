import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers } from '../../api/fetch'

const UsersList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    try {
      const getUsersFetch = async () => {
        const usersFetch = await getUsers()
        console.log(usersFetch)
        setUsers(usersFetch.data.users)
      }
      getUsersFetch()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const deleteUserFn = async (userId) => {
    try {
      const deleteUserFetch = await deleteUser(userId)
      console.log(deleteUserFetch)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {users.map((user) => {
        return (
          <div key={user._id}>
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
            <p>{user.email}</p>
            <button
              onClick={() => {
                deleteUserFn(user._id)
              }}
            >
              bborrar
            </button>
          </div>
        )
      })}
    </>
  )
}

export default UsersList
