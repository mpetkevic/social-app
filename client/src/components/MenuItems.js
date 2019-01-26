import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/ordersActions';

const MenuItems = (props) => {
  const menuItems = props.food.filter((item) => item.category=== props.match.params.category)
    .map((item, i)=> {
      return (
        <div
          className='menu-item'
          key={i}
          onClick={()=>props.addItemToCart(item)}
        >
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
          <span>{item.price.toFixed(2)}€</span>
        </div>
      )
    });

  return (
    <div className="Menu-Items">
      <div className="container">
        {menuItems}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    food: state.food
  }
}

export default connect(mapStateToProps, actions, null, {pure:false} )(withRouter(MenuItems));