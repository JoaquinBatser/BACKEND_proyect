import { Router } from 'express'
import ProductManager from '../classes/ProductManager.js'

const router = Router()
const productManager = new ProductManager()

router.post('/', async (req, res) => {})

export default router
