import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import ProductList from './components/products/ProductList'
import { fetchProducts, getUser } from './api/fetch'
import NavBar from './components/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Categories from '../pages/Categories'
import Cart from '../pages/Cart'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  const [products, setProducts] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    fetchProducts().then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <>
      {data.success ? <NavBar data={data} /> : <div>Loading...</div>}

      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/category/:category"
          element={<Categories data={data} />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
