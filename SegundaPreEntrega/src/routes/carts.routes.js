import { Router } from 'express'
import CartsManager from '../services/db/carts.service.db.js'

const cartRouter = Router()

const cartsManager = new CartsManager()

cartRouter.get('/', async (req, res) => {
  try {
    const carts = await cartsManager.getCarts()
    res.json(carts)
  } catch (error) {
    console.log(error)
  }
})

cartRouter.get('/:cId', async (req, res) => {
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
})

cartRouter.post('/', async (req, res) => {
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
})

cartRouter.post('/:cId/product/:pId', async (req, res) => {
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
})

cartRouter.delete('/:cId/product/:pId', async (req, res) => {
  const { cId } = req.params
  const { pId } = req.params
  try {
    await cartsManager.deleteProductFromCart(cId, pId)
  } catch (error) {
    console.log(error)
  }
})

cartRouter.delete('/:cId', async (req, res) => {
  const { cId } = req.params
  try {
    await cartsManager.emptyCart(cId)
    res.json({
      message: 'Cart emptied successfully',
    })
  } catch (error) {
    console.log(error)
  }
})

export default cartRouter
