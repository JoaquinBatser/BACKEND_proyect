import axios from 'axios'

export const fetchProducts = async (category, page) => {
  try {
    console.log('params', category)
    const data = await axios.get('/api/products', {
      params: { category, page },
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchProductById = async (productId) => {
  try {
    const data = await axios.get(`/api/products/${productId}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const addNewProduct = async (newProduct) => {
  try {
    const data = await axios.post('/api/products', newProduct)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const signupUser = async (newUser) => {
  try {
    console.log('newUsefecthr', newUser)
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

export const loginUser = async ({ userData }) => {
  try {
    const data = await axios.post('/api/sessions/login', userData)
    return data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access:', error.message)
    } else {
      console.error('Other Axios error:', error.message)
    }
  }
}

export const getUsers = async () => {
  try {
    const data = await axios.get('/api/sessions')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (userId) => {
  try {
    const data = await axios.delete(`/api/sessions/${userId}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const logout = async () => {
  try {
    const data = await axios.post('/api/sessions/logout')
    return data
  } catch (error) {
    console.log(error)
  }
}
export const sendPassswordChangeEmail = async (email) => {
  try {
    console.log('fetch', email)
    const data = await axios.get(`/api/sessions/password/change/${email}`)

    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updatePassword = async (info) => {
  try {
    const email = info.email
    const newPassword = info.newPassword
    const token = info.token

    console.log('info', info)
    console.log('email', email)
    console.log('newPassword', newPassword)

    const body = {
      email,
      newPassword,
    }
    const data = await axios.put(`/api/sessions/password/change/${token}`, body)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async () => {
  try {
    const data = await axios.get('/api/sessions/current')
  } catch (error) {
    console.log(error)
  }
}

export const createCart = async (userId) => {
  try {
    const data = await axios.post('/api/carts', { userId: userId })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getCart = async ({ cartId }) => {
  try {
    const data = await axios.get(`/api/carts/${cartId}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getUserCart = async (userId) => {
  try {
    console.log('userId', userId)
    const data = await axios.get(`/api/carts/user/${userId}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const addProductToCart = async (productId, cartId) => {
  try {
    const data = await axios.post(`api/carts/${cartId}/product/${productId}/`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateProductQuantity = async (productId, cartId, quantity) => {
  try {
    const data = await axios.put(`api/carts/${cartId}/product/${productId}`, {
      quantity,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const sendSocketMessage = async ({ messageData }) => {
  try {
    const data = await axios.post('/api/chat', messageData)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getMessages = async () => {
  try {
    const data = await axios.get('/api/chat')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const emptyCart = async (cartId) => {
  try {
    const data = await axios.delete(`/api/carts/${cartId}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const uploadDocs = async ({ docs, uId }) => {
  try {
    const data = await axios.post(`/api/users/${uId}/documents`, docs)
    return data
  } catch (error) {
    console.log(error)
  }
}
