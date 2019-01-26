import React, { Component } from 'react';
import './sass/index.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import * as actions from './actions/authActions';
import {connect} from 'react-redux';

import Home from './pages/Home';
import Drinks from './pages/Drinks';
import Header from'./layout/Header';
import Menu from'./pages/Menu';
import Cart from'./pages/Cart';
import Pay from'./pages/Pay';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import NotFound from'./pages/NotFound';



class Routes extends Component {
  componentWillMount () {
    const token = localStorage.getItem('shop-token');
    if (token) {
      this.props.authenticate(token);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/drinks' component={Drinks}/>
            <Route exact path='/menu' component={Menu}/>
            <Route path='/menu/:category' component={Menu}/>
            <Route exact path='/checkout/pay' component={Pay}/>
            <Route path='/checkout' component={Cart}/>
            <Route path='/login' component={Login}/>
            <Route path='/admin' component={Admin}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(Routes);
