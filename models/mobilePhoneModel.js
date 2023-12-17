const mongoose = require('mongoose');

const mobilePhoneSchema = mongoose.Schema({
  category: String,
  productName: String,
  productPrice: Number,
  productRating: Number,
  productImage: String,
  productRatingCount: Number,
  productReviewsCount: Number
})