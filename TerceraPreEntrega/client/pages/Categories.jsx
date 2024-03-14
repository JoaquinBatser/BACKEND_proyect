import React from 'react'
import ProductList from '../src/components/products/ProductList'
import { useParams } from 'react-router-dom'

const Categories = ({ data }) => {
  const { category } = useParams()
  return (
    <main>
      {data.success ? (
        <ProductList products={data.products} category={category} />
      ) : (
        <div>Loading...</div>
      )}
    </main>
  )
}

export default Categories
