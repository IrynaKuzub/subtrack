const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Subscription = new Schema(
  {
    name: { type: String, required: true },
    userID: { type: String, required: true },
    paymentInterval: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String},
    labels: { type: [String]},
    logoURI: { type: [String]}
  },
  { timestamps: true },
)

module.exports = mongoose.model('subtrack', Subscription)