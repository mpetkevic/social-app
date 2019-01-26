import * as types from './types';
import axios from 'axios';


export function fetchProducts() {
  return async function (dispatch) {
    dispatch({
      type: types.LOADING_PRODUCTS
    })
    const {data} = await axios.get('api/products');
    dispatch({
      type: types.FETCH_PRODUCTS,
      data
    })
  }
}

export function addProduct(product) {
  return async function (dispatch) {
    dispatch({
      type: types.LOADING_PRODUCTS
    })
    const {data} = await axios.post('api/products', product);
    dispatch({
      type: types.ADD_PRODUCT,
      data
    })
  }

}