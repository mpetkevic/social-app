import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux'
import icon from '../assets/images/if_shopping-cart_216477.svg'

const Header = (props) => {
  return (
    <header className="main-header">
      <NavLink exact activeClassName="active" to='/'>Home</NavLink>
      <NavLink activeClassName="active" to='/menu'>Menu</NavLink>
      <NavLink activeClassName="active" to='/drinks'>Drinks</NavLink>
      <Link to='/checkout'>
        <img src={icon} alt="cart"/>
        <span>({props.orders.length})</span>
      </Link>
      {props.auth.user && <h3>{props.auth.user.firstname}</h3>}
    </header>
  );
};

const mapStateToProps = ({orders, auth}) => ({orders, auth});
export default connect(mapStateToProps)(Header);