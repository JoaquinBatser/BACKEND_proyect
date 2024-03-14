import React, { createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {}

  const removeFromCart = (product) => {}

  const clearCart = () => {}

  const values = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  }
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

export default CartContext
