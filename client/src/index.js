import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import drinksReducer from './reducers/drinksReducer';
import foodReducer from './reducers/foodReducer';
import ordersReducer from './reducers/ordersReducer';
import authReducer from './reducers/authReducer';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {Provider} from  'react-redux';
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  drinks: drinksReducer,
  food: foodReducer,
  orders: ordersReducer,
  auth: authReducer

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
