import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../../api/fetch'
import { useParams } from 'react-router-dom'
import ProductList from './ProductList'

const ProductListContainer = () => {
  const [productsData, setProductsData] = useState([])
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(0)
  console.log(category)

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const productsResponse = await fetchProducts(category, page)

        console.log(productsResponse)
        setPages(productsResponse.data.productsData.products.totalPages)
        console.log(productsResponse.data.productsData.products.docs)
        setProductsData(productsResponse.data.productsData)
      } catch (error) {}
    }
    fetchProductsData()
  }, [category, page])

  return (
    <section className="h-screen max-w-[1280px] m-auto pt-11">
      {productsData.success ? (
        <div>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => {
                setCategory('')
              }}
            >
              All
            </button>
            <button
              onClick={() => {
                setCategory('Charging')
              }}
            >
              Charging
            </button>
            <button
              onClick={() => {
                setCategory('Accessories')
              }}
            >
              Accessories
            </button>
            <button
              onClick={() => {
                setCategory('Wearables')
              }}
            >
              Wearables
            </button>
            <button
              onClick={() => {
                setCategory('Phones')
              }}
            >
              Phones
            </button>
          </div>

          {/* <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select a category</option>
            <option value="Charging">Charging</option>
            <option value="Accessories">Accessories</option>
            <option value="Wearables">Wearables</option>
            <option value="Phones">Phones</option>
          </select> */}
          <ProductList products={productsData.products} />

          <div className="flex items-center justify-center">
            <button
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1)
                }
              }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (page < pages) {
                  setPage(page + 1)
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        // <div>products</div>
        <div>loading--</div>
      )}
    </section>
  )
}

export default ProductListContainer
