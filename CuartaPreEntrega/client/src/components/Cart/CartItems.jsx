import React, { useState } from 'react'

const CartItems = ({ product }) => {
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
    </div>
  )
}

export default CartItems
