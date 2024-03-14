import React, { createContext, useState } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const login = (userData) => {
    setIsAuthenticated(true)
    setUser(userData.user)
  }

  const values = {
    isAuthenticated,
    user,
    login,
  }
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserContext
