import React, { useContext } from 'react'
import axios from 'axios'
import { addProductToCart, getUserCart } from '../../api/fetch'
import { UserContext } from '../../context/UserContext'

const ProductCard = ({ product }) => {
  const { user } = useContext(UserContext)

  const addProduct = async () => {
    const cartData = await getUserCart(user._id)
    console.log(cartData)
    const productResponse = await addProductToCart(
      product._id,
      cartData.data.cartData.cart._id
    )
  }
  return (
    <div className="flex flex-col items-center">
      <img
        src={product.image}
        className="w-12 opacity-40"
        alt={product.title}
      />
      <h3 className="font-bold text-2xl my-2">{product.title}</h3>

      <p>${product.price}</p>

      <div>
        {user && user.role === 'user' && (
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white rounded-2xl px-4 py-1 mt-4"
            onClick={addProduct}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductCard
