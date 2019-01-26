const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    unique: true,
    type: String,
    required: true,
    maxlength: 30,
    tolowercase: true
  },
  price: {
    type: Number,
    required: true,
    max: 100,
  },
  category: {
    type: String,
    required: true,
    maxlength: 30
  },
  desc: {
    type: String,
    maxlength: 2000
  }
});

module.exports = mongoose.model('products', ProductSchema);