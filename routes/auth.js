const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/api/login', (req,res) => {
  console.log(req.body);
  if(req.body.username === 'admin' && req.body.password === 'admin') {
    const user = {firstname: 'Miroslav', lastname: "P."}
    const token = jwt.sign(user, process.env.JWT_KEY);
    return res.send(token);
  }
  res.status(401).send('bad login');
});

module.exports = router;