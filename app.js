const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const productsRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/onlinestore', { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log('Connected to db'))
  .on('error', (e)=>console.log(e));

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());


//GET
app.get('/', (req, res) => {
  //res.send('hello');
  //res.json(data);
  res.sendFile(__dirname + '/index.html');
});

const middleware = (req, res, next) => {
  req.user = 'Miroslav';
  next();
}

app.get('/api', middleware, (req,res) => {
  console.log(req.user);
  res.send('ok');
})
app.use(productsRoutes);
app.use(authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is working on 9000 port`)
})
