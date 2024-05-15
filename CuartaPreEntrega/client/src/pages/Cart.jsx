import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import CartItems from '../components/Cart/CartItems'
import { createCart, getCart, getUser, getUserCart } from '../api/fetch'
import { emptyCart } from '../api/fetch'
import { UserContext } from '../context/UserContext'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  const [cartData, setCartData] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [cartId, setCartId] = useState('')
  const { user } = useContext(UserContext)

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = user._id
        const cartResponse = await getUserCart(userId)
        console.log('crr', cartResponse)
        console.log(cartResponse.data.cartData.success)

        if (!cartResponse.data.cartData.success) {
          const newCart = await createCart(userId)
          console.log('nc', newCart)
          const userCart = await getUserCart(userId)
          console.log('uc', userCart)
          setCartData(userCart.data)
          setCartProducts(userCart.data.cart.products)
          return
        }
        console.log('cr', cartResponse.data.cartData)
        setCartId(cartResponse.data.cartData.cart._id)
        setCartData(cartResponse.data.cartData)
        setCartProducts(cartResponse.data.cartData.cart.products)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCart()
  }, [user])

  const emptyThisCart = async () => {
    try {
      await emptyCart(cartId)
      const cartResponse = await getCart()
      setCartData(cartResponse.data)
      setCartProducts(cartResponse.data.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {user ? (
        <section className="pt-11 max-w-[1280px] m-auto px-12">
          <h1 className="text-3xl font-semibold">{user.first_name}'s Cart</h1>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(640px,1fr))] gap-y-24 mt-11">
            {cartProducts.map((product) => (
              <CartItems
                cartId={cartId}
                key={product.product._id}
                product={product}
              />
            ))}
          </ul>
        </section>
      ) : (
        <div className="pt-11 max-w-[1280px] m-auto px-12">
          <h2>Log in to see your cart</h2>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </div>
      )}
    </>
  )
}

export default Cart
