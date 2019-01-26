import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/authActions';

class Login extends Component {
  state = {
    user: '',
    password: ''
  }

  onInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.user, this.state.password, () => {
      this.props.history.push('/admin');
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="user"
            placeholder='Enter username'
            onChange={this.onInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={this.onInputChange}
          />
          <button>Login</button>
          {
            this.props.auth.errors && <div>{this.props.auth.errors}</div>
          }
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => ({auth})
export default connect(mapStateToProps, actions)(Login);