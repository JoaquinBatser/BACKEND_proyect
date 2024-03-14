import axios from 'axios'

export const fetchProducts = async () => {
  try {
    const data = await axios.get('/api/products')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const singupUser = async ({ newUser }) => {
  try {
    const data = await axios.post('/api/sessions/signup', newUser)
    return data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access:', error.message)
    } else {
      console.error('Other Axios error:', error.message)
    }
  }
}

export const getUser = async () => {
  try {
    const data = await axios.get('/api/sessions/current')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const createCart = async () => {
  try {
    const data = await axios.post('/api/carts')
    return data
  } catch (error) {
    console.log(error)
  }
}
