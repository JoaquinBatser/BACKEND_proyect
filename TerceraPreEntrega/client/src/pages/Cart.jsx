import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CartItems from '../components/Cart/CartItems'
import { getUser } from '../api/fetch'

const Cart = () => {
  const [cartData, setCartData] = useState([])
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartResponse = await axios.get(
          '/api/carts/65f8c3f6c77a348bcd692740'
        )
        setCartData(cartResponse.data)
        setCartProducts(cartResponse.data.data.products)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCart()
  }, [])

  const getCurrentUser = async () => {
    try {
      const data = await getUser()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {cartData.status ? (
        <div>
          <h1>Cart</h1>
          <button onClick={getCurrentUser}>a</button>
          {cartProducts.map((product) => (
            <CartItems product={product} />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}

export default Cart
