
import "../styles/Login.css";
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";
import axios from "axios";
import { Redirect } from 'react-router'
axios.defaults.withCredentials = true;

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: "",
      auth: false,
    };
  }

//   componentDidMount() {
    
//       axios.post('http://localhost:3000/api/v1/login')
//             .then(res => {
//                 console.log(res);
//                 this.setState({ login: '', password: '' })
//             })
//   }

  validateForm() {
    return this.state.login.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/v1/login', {login: this.state.login, password: this.state.password})
            .then(res => {
                if(res.status == 200){
                    this.setState({ auth: true});
                }              
            })
  }

  render() {
      const { auth } = this.state;
     if (auth) {
       return <Redirect to='/homepage'/>;
     }
    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="login" bsSize="large">
            <Form.Control
              autoFocus
              type="text"
              value={this.state.login}
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
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}