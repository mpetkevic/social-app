const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
  if(!req.headers.authorization) return res.status(401).send('No token');
  const token = req.headers.authorization.split(' ')[1];
  try {
    const match = jwt.verify(token, process.env.JWT_KEY);
    console.log(match);
    next();
  } catch (err) {
    return res.status(401).send('Bad token');
  }
}