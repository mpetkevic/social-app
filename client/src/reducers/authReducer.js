import * as types from '../actions/types';

const initialState = {
  loading: false,
  errors: '',
  user: ''
}

export default (state=initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...initialState,
        user: {
          firstname: action.firstname,
          lastname: action.lastname
        }
      }
    case types.LOG_IN_ERROR:
      return {
        ...initialState, errors: action.errors
      }
    default: return state;
  }
}