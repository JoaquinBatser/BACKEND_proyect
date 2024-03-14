import { NavLink } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductList from '../products/ProductList'
import Home from '../../../pages/Home'
import Profile from '../../../pages/Profile'
import UserContext from '../../context/UserContext'

const NavBar = ({ data }) => {
  const { isAuthenticated, user } = useContext(UserContext)

  const { products } = data

  const categories = [...new Set(products.map((product) => product.category))]

  return (
    <nav>
      <NavLink to={'/'}>
        <p>TITLE</p>
      </NavLink>
      <NavLink to="/cart">Cart</NavLink>

      {categories.map((category) => {
        return (
          <NavLink to={`/category/${category}`} key={category}>
            <p>{category}</p>
          </NavLink>
        )
      })}
      {!isAuthenticated && (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </>
      )}
      {isAuthenticated && (
        <NavLink to="/profile">{user.first_name}</NavLink> // Example for authenticated user link
      )}
    </nav>
  )
}

export default NavBar
