
import "../styles/Login.css";
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {alertActions} from "../actions/AlertActions";
import axios from "axios";
import { Redirect } from 'react-router'
import { userActions } from '../actions/UserActions';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
axios.defaults.withCredentials = true;


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      auth: false,
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
        dispatch(alertActions.clear());
        dispatch(userActions.login(username, password));
    }   
  }

  render() {
    const { loggedIn, loggingIn} = this.props;
     if (loggedIn) {
       return <Redirect to='/homepage'/>;
     }
    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit} className="col-md-6">
          <Form.Group controlId="username" bsSize="large">
            <Form.Control
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          <Button
             className="btn btn-primary col-md-6"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </Form>
        {
        loggingIn &&
               <Loader 
               type="Puff"
               color="#00BFFF"
               height="30"	
               width="30"
            />  
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const  {loggingIn, loggedIn } = state.authentication;
  return {
      loggingIn, loggedIn
  };
}

export default Login = connect(mapStateToProps)(Login);