import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/productsActions';

class Admin extends Component {
  state = {
    name: '',
    desc: '',
    price: '',
    category: 'drinks'
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state);
  }

  componentDidMount () {
    if(!this.props.auth.user) this.props.history.push('/login');
    this.props.fetchProducts();
  }

  render() {
    const products = this.props.drinks.data && this.props.drinks.data.map((drink, i) => {
      return (
        <div className="drink" key={i}>
          <h3>{drink.name}</h3>
          <h3>{drink.price}</h3>
        </div>
      )
    })
    return (
      <div className='Admin'>
        <h1>Admin</h1>
        <form onSubmit={this.onFormSubmit}>
          <input onChange={this.onChange} type="text" name="name" placeholder="name"/>
          <input onChange={this.onChange} type="number" name="price" placeholder="price"/>
          <input onChange={this.onChange} type="text" name="desc" placeholder="desc"/>
          <input onChange={this.onChange} type="text" name="category" placeholder="category"/>
          <button>Add!</button>
        </form>
        {products}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks,
    auth: state.auth
  }
}
export default connect(mapStateToProps, actions)(Admin);