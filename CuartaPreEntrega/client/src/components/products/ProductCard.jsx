import React, { useContext } from 'react'
import axios from 'axios'
import { addProductToCart, getUserCart } from '../../api/fetch'
import { UserContext } from '../../context/UserContext'

const ProductCard = ({ product }) => {
  const { user } = useContext(UserContext)
  const addProduct = async () => {
    const cartData = await getUserCart(user._id)
    const productResponse = await addProductToCart(
      product.id,
      cartData.data.cart._id
    )
  }
  return (
    <div>
      <div>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p>{product.description}</p>
      </div>

      <div>
        {user && user.role === 'user' && (
          <div>
            <button onClick={addProduct}>Add to cart</button>
          </div>
        )}

        <p>${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
