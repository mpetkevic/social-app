import * as types from './types';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export function login(username, password, redirect) {
  return async function(dispatch) {
    try {
      const res = await axios.post('/api/login', {
        username,
        password
      });
      localStorage.setItem('shop-token', 'Bearer ' + res.data);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
      const token = jwt.decode(res.data);
      const {firstname, lastname} = token
      console.log(res);
      dispatch({
        type: types.LOG_IN,
        firstname,
        lastname
      })
      redirect();
    } catch (err) {
      dispatch({
        type: types.LOG_IN_ERROR,
        errors: err.response.data
      })
    }
  }
}

export function authenticate(token) {
  const user = jwt.decode(token.split(' ')[1]);
  console.log(token);
  axios.defaults.headers.common['Authorization'] = token;
  return {
    type: types.LOG_IN,
    firstname: user.firstname,
    lastname: user.lastname
  }
}