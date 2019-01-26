import React from 'react';
import spinner from '../../assets/images/spinner.gif';
import * as actions from '../../actions/ordersActions';
import {fetchProducts} from '../../actions/productsActions';
import {connect} from 'react-redux';

class Drinks extends React.Component {
  componentDidMount() {
    if(this.props.drinks.data) return;
    this.props.fetchProducts();
  }

  render() {
    const drinks = this.props.drinks.data && this.props.drinks.data.map((drink,i) => {
      return (
        <div
          className="drink"
          key={i}
          onClick={()=>this.props.addItemToCart(drink)}
        >
          <h3>{drink.name}</h3>
          <p>{drink.desc}</p>
          <span>{drink.price}€</span>
        </div>
      )
    })

    return (
      <div className="Drinks">
        <h1>Drinks</h1>
        <div className="container">
          {this.props.drinks.loading ?
            <img src={spinner} alt=""/> :
              drinks
          }
        </div>
      </div>
    );
  }
};


const mapStateToProps = (state) => {
  //ka grazini is cia deti i componento props
  return {
    drinks: state.drinks
  }
};


// senas budas
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItemToCart: function (item) {
//       return dispatch({
//         type: 'ADD_ITEM',
//         item
//       })
//     }
//   }
// }


export default connect(mapStateToProps,{...actions, fetchProducts})(Drinks);