import React from 'react';
import MenuItems from '../../components/MenuItems';
import {NavLink} from 'react-router-dom';

const Menu = () => {
  return (
    <div className="Menu">
      <h1>Menu</h1>
      <div className="containers categories">
        <NavLink exact activeClassName="active" to='/menu/pizzas'>
          Pizza
        </NavLink>
        <NavLink exact activeClassName="active" to='/menu/burgers'>
          Burgers
        </NavLink>
        <NavLink exact activeClassName="active" to='/menu/sushi'>
          Sushi
        </NavLink>

        <MenuItems/>
      </div>
    </div>
  );
};

export default Menu;