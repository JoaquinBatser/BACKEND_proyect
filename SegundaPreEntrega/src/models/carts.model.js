import mongoose from 'mongoose'

const cartCollection = 'carts'

const cartSchema = new mongoose.Schema(
  {
    products: {
      type: {
        product: { type: mongoose.Types.ObjectId, ref: 'products', required: true },
        quantity: { type: Number, default: 1 },
      },
    },
  },
  { timestamps: true }
)

cartSchema.pre(/^find/, next => {
  this.populate('products.product')
  next()
})

export const cartModel = mongoose.model(cartCollection, cartSchema)
