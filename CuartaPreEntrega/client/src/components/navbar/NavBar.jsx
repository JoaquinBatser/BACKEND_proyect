import { NavLink } from 'react-router-dom'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { getUser } from '../../api/fetch'
import { UserContext } from '../../context/UserContext'

const NavBar = () => {
  const { user } = useContext(UserContext)

  console.log('user', user)

  return (
    <nav>
      <NavLink to={'/'}>O</NavLink>

      <div>
        {user ? (
          <>
            <NavLink to="/profile">{user.first_name}</NavLink>
            {user.role === 'admin' && (
              <NavLink to="/newProduct">Add product</NavLink>
            )}
          </>
        ) : (
          <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </div>
        )}

        <div>
          <div>
            <NavLink to="/cart">👜</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
