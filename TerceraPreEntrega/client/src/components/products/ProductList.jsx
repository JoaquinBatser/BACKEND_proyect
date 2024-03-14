import React from 'react'

const ProductList = ({ products, category }) => {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products

  return (
    <ul className="products-list">
      {filteredProducts.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} />
        </li>
      ))}
    </ul>
  )
}

export default ProductList
