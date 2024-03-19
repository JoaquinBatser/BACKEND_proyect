import CartsManager from '../services/db/carts.service.db.js'
const cartsManager = new CartsManager()

const getCart = async (req, res) => {
  try {
    const carts = await cartsManager.getCarts()
    res.json(carts)
  } catch (error) {
    console.log(error)
  }
}

const getCartById = async (req, res) => {
  const { cId } = req.params
  try {
    const cart = await cartsManager.getCartById(cId)
    const response = {
      status: 'success',
      message: 'Cart found',
      data: cart,
    }
    res.json(response)
  } catch (error) {
    console.log(error)
  }
}

const createCart = async (req, res) => {
  try {
    await cartsManager.newCart()
    res.json({
      message: 'Successful new Cart',
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error creating cart',
      error: error.message,
    })
  }
}

const addProductToCart = async (req, res) => {
  const { cId, pId } = req.params

  try {
    const cart = await cartsManager.addProductToCart(cId, pId)
    if (!cart) {
      res.status(404).json({
        success: false,
        message: 'Cart not found',
      })
      return
    }
    res.status(200).json({
      success: true,
      message: `Product ${pId} added to cart ${cId}`,
      cart,
    })
  } catch (error) {
    console.log(error)
  }
}

const updateProductQuantity = async (req, res) => {
  const { cId, pId } = req.params
  const { quantity } = req.body
  try {
    const cart = await cartsManager.updateProductQuantity(cId, pId, quantity)
    if (!cart) {
      res.status(404).json({
        success: false,
        message: 'Cart not found',
      })
      return
    }
    res.status(200).json({
      success: true,
      message: `Product ${pId} quantity updated in cart ${cId}`,
      cart,
    })
  } catch (error) {
    console.log(error)
  }
}

const deleteProductFromCart = async (req, res) => {
  const { cId, pId } = req.params

  try {
    const cart = await cartsManager.deleteProductFromCart(cId, pId)
    if (!cart) {
      res.status(404).json({
        success: false,
        message: 'Cart not found',
      })
      return
    }
    res.status(200).json({
      success: true,
      message: `Product ${pId} deleted from cart ${cId}`,
      cart,
    })
  } catch (error) {
    console.log(error)
  }
}

const emptyCart = async (req, res) => {
  const { cId } = req.params
  try {
    await cartsManager.emptyCart(cId)
    res.json({
      message: 'Cart emptied successfully',
    })
  } catch (error) {
    console.log(error)
  }
}

const purchaseCart = async (req, res) => {
  const { cId } = req.params
  const { purchaser } = req.body
  const code = Math.random().toString(36).substring(2, 15)

  try {
    const cart = await cartsManager.getCartById(cId)

    if (!cart) {
      res.status(404).json({
        success: false,
        message: 'Cart not found',
      })
      return
    }
    let totalPrice = 0
    const { products } = cart

    for (let i = 0; i < products.length; i++) {
      totalPrice += products[i].product.price * products[i].quantity
    }
    const newTicket = await cartsManager.newTicket({
      purchaser,
      code,
      amount: totalPrice,
    })
    const ticket = {
      newTicket,
      cart,
    }

    res.status(200).json({
      success: true,
      message: `Cart ${cId} purchased by ${purchaser}`,
      ticketData: ticket,
    })

    await cartsManager.emptyCart(cId)
  } catch (error) {
    console.log(error)
  }
}

export default {
  getCart,
  getCartById,
  createCart,
  addProductToCart,
  updateProductQuantity,
  deleteProductFromCart,
  emptyCart,
  purchaseCart,
}
