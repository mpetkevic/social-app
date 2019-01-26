const express = require('express');

const mongoose = require('mongoose');
const router = express.Router();
const Product = require('../models/ProductSchema');

const auth = require('../auth/auth');

router.get('/api/products/:name', async (req, res) => {
  const product = await Product.findOne({name: req.params.name});
  if(!product) return res.status(404).send('Pizza not found');
  res.json(product)
})

router.get('/api/products/', async (req, res) => {
  // get query  /products/?name=Chicken
  const products = await Product.find();
  res.json(products)
})

// url    POST /api/products
// access admin
// desc   create new product

router.post('/api/products', auth,  async (req,res) => {
  console.log(req.body);

  const {name, price, category, desc} = req.body
  const product = new Product({name, price, category, desc});
  await product.save()
  res.json(product);
})




// url    DELETE /api/products/:name
// access admin
// desc   delete product

router.delete('/api/products/:name', auth,  async (req, res) => {

  const product = await Product.findOne({name: req.params.name});
  if(!product) return res.status(404).send('Pizza not found');
  product.delete();
  res.json(product)
})

// url    PUT /api/products/
// access admin
// desc   update product

router.put('/api/products', auth, async (req,res) => {
  if(!mongoose.Types.ObjectId.isValid(req.body.id)) res.status(400).send('Wtf!!!!??');
  const product = await Product.findOne({_id: req.body.id});
  if(!product) return res.status(404).send('Pizza not found');
  product.name =req.body.name;
  product.price =req.body.price;
  product.desc =req.body.desc;
  product.category =req.body.category;
  await product.save();
  res.json(product);
})

module.exports = router;