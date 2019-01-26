import React, {Component} from 'react';
import axios from 'axios';

class Pay extends Component {
  state = {
    firstname: '',
    lastname: '',
    address: '',
    phone: '',
    comments: ''
  }

  onInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    axios.post('http://192.168.1.199:9000/api/order', {user: this.state})

  }

  render() {
    return (
      <div className="Pay">
        <h1>Pay</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            name="firstname"
            value={this.state.firstname}
            placeholder=''
            type='text'
            onChange={this.onInputChange}
          />
          <input
            name="lastname"
            value={this.state.lastname}
            placeholder=''
            type='text'
            onChange={this.onInputChange}
          />
          <input
          name="address"
          value={this.state.address}
          placeholder=''
          type='text'
          onChange={this.onInputChange}
        />
          <input
          name="phone"
          value={this.state.phone}
          placeholder=''
          type='text'
          onChange={this.onInputChange}
        />
          <textarea
            name="comments"
            cols="30"
            rows="4"
            value={this.state.comments}
            onChange={this.onInputChange}
          ></textarea>
          <button>
            Checkout
          </button>
        </form>
      </div>
    );
  }
}

export default Pay;