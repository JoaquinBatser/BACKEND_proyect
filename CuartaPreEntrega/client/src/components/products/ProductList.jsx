import React from 'react'
import ProductCard from './ProductCard'
import ProductDetail from './ProductDetail'
import { NavLink } from 'react-router-dom'

const ProductList = ({ products }) => {
  const { docs } = products
  return (
    <ul>
      {docs.map((product) => (
        <li>
          {/* <NavLink to={`/product/${product.id}`}> */}
          <ProductCard key={product.id} product={product} />
          {/* </NavLink> */}
        </li>
      ))}
    </ul>
  )
}

export default ProductList
