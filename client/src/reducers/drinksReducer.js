import * as types from '../actions/types';

const initialState = {
  data: null,
  errors: '',
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_PRODUCTS:
      return {...initialState, loading: true}
    case types.FETCH_PRODUCTS:
      return {...initialState, data: action.data};
    case types.ADD_PRODUCT:
      return {errors: '', loading: false, data: [...state.data, action.data]};
    default: return state;
  }

}