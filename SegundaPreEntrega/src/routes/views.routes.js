import { Router } from 'express'
import ProductsManager from '../services/db/products.service.db.js'
import CartsManager from '../services/db/carts.service.db.js'
import ChatService from '../services/db/chat.service.db.js'

const viewsRouter = Router()

viewsRouter.get('/products', async (req, res) => {
  try {
    const { limit = 10, page = 1, sort, category } = req.query

    const filter = {
      query: {},
      options: {
        limit,
        page,
      },
    }

    if (sort) {
      filter.options.sort = { price: sort }
    }

    if (category) {
      filter.query.category = category
    }
    const productsManager = new ProductsManager()
    const data = await productsManager.getProducts(filter)
    const { docs, hasPrevPage, prevPage, hasNextPage, nextPage, totalPages } = data
    const products = docs

    console.log(data)
    res.render('products', {
      title: 'Products',
      products,
      hasPrevPage,
      prevPage,
      hasNextPage,
      nextPage,
      totalPages,
      style: 'css/products.css',
    })
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

viewsRouter.get('/cart/:cId', async (req, res) => {
  const { cId } = req.params
  try {
    const cartManager = new CartsManager()
    const cart = await cartManager.getCartById(cId)
    const { products } = cart
    console.log(products)

    res.render('cart', { title: 'Cart', products, style: '/css/cart.css' })
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

viewsRouter.get('/chat', async (req, res) => {
  const chatService = new ChatService()
  const messages = await chatService.findMessages()
  res.render('chat', { title: 'Chat', messages, style: 'css/chat.css' })
})

export default viewsRouter
