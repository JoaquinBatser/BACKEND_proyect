import React, { useState } from 'react'
import { addNewProduct } from '../api/fetch'

const NewProduct = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [code, setCode] = useState('')
  const [stock, setStock] = useState('')
  const [product, setProduct] = useState({})

  const addProduct = async (e) => {
    e.preventDefault()

    const newProduct = {
      title,
      description,
      price,
      category,
      thumbnail,
      code,
      stock,
    }

    const productResponse = await addNewProduct(newProduct)

    console.log(productResponse.data)
    if (productResponse.data.productData.success) {
      setProduct(productResponse.data.productData.product)
    }

    console.log(productResponse)
  }
  return (
    <section>
      <form onSubmit={addProduct}>
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          type="text"
          id="title"
          name="title"
          placeholder="Title"
        />
        <label htmlFor="description">Description</label>
        <input
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          type="text"
          id="description"
          name="description"
          placeholder="Description"
        />
        <label htmlFor="price">Price</label>
        <input
          onChange={(e) => {
            setPrice(e.target.value)
          }}
          type="text"
          id="price"
          name="price"
          placeholder="Price"
        />
        <label htmlFor="category">Category</label>
        <input
          onChange={(e) => {
            setCategory(e.target.value)
          }}
          type="text"
          id="category"
          name="category"
          placeholder="Category"
        />
        <label htmlFor="thumbnail">Thumbnail</label>
        <input
          onChange={(e) => {
            setThumbnail(e.target.files[0])
          }}
          type="file"
          id="thumbnail"
          name="productImg"
          placeholder="Thumbnail"
        />
        <label htmlFor="code">Code</label>
        <input
          onChange={(e) => {
            setCode(e.target.value)
          }}
          type="text"
          id="code"
          name="code"
          placeholder="Code"
        />
        <label htmlFor="stock">Stock</label>
        <input
          onChange={(e) => {
            setStock(e.target.value)
          }}
          type="text"
          id="stock"
          name="stock"
          placeholder="Stock"
        />
        <button>Add product</button>
      </form>
      {product && (
        <div>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
          <p>{product.thumbnail}</p>
          <p>{product.code}</p>
          <p>{product.stock}</p>
        </div>
      )}
    </section>
  )
}

export default NewProduct
// title, description, price, category, thumbnail, code, stock
