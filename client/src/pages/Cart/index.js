import React from 'react';
import {connect} from 'react-redux';
import Popup from '../../components/Popup';
import {Link} from 'react-router-dom';
import * as actions from '../../actions/ordersActions';

class Cart extends React.Component {
  state ={
    warning: false
  }
  togglePopup = () =>this.setState({warning: !this.state.warning})

  render () {
    const orders = this.props.orders.map((order,i) => {
      return (
        <div className="order" key={i}>
          <h3>{order.name}</h3>
          <span>{order.price}</span>
          <strong onClick={()=>this.props.removeItemFromCart(order.id)}>X</strong>
        </div>
      )
    });

    return (
      <div className="Cart">
        {this.state.warning ?
          <Popup
            togglePopup={this.togglePopup}
            removeAllItems={this.props.removeAllItems}
          >
            <h4>Clear All Orders?</h4>
          </Popup>
           : null}
        <h1>Checkout</h1>
        <div className="container">
          {orders}
        </div>
        <Link to="/checkout/pay/" className="checkout">
          Delivery
        </Link>
        {this.props.orders.length !== 0 && <div onClick={this.togglePopup} className='btn'>Clear Order</div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
};

export default connect(mapStateToProps, actions)(Cart);