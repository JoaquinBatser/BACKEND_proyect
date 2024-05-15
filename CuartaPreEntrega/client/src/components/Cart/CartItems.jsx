import React, { useEffect, useState } from 'react'
import { updateProductQuantity } from '../../api/fetch'

const CartItems = ({ product, cartId }) => {
  const [quantity, setQuantity] = useState(product.quantity)

  useEffect(() => {
    setQuantity(product.quantity)
  }, [product.quantity])
  const updateQuantity = async () => {
    try {
      // Call your backend to update the quantity
      // Assume the response contains the updated product
      const updatedProduct = await updateProductQuantity(
        product.product._id,
        cartId,
        quantity
      )

      // Then update quantity in the state
      setQuantity(product.quantity)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div>
        <img
          className="border mb-4 h-40"
          src={product.product.image}
          alt={product.product.title}
        />
        <h3>{product.product.title}</h3>
        <p>{product.product.category}</p>
        <p>{product.product.description}</p>
      </div>

      <div>
        <p>${product.product.price}</p>
      </div>
      <div>Quantity: {product.quantity}</div>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={updateQuantity}>✅</button>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
    </div>
  )
}

export default CartItems
