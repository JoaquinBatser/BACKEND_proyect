import mongoose from 'mongoose'

const ticketCollection = 'tickets'

const ticketSchema = new mongoose.Schema({
  amount: { type: Number, require: true },
})

export const userModel = mongoose.model(ticketCollection, ticketSchema)
