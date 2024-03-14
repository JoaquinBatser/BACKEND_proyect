import React from 'react'
import ProductList from '../src/components/products/ProductList'

const Home = ({ data }) => {
  return (
    <main>
      {data.success ? (
        <ProductList products={data.products} />
      ) : (
        <div>Loading...</div>
      )}
    </main>
  )
}

export default Home
