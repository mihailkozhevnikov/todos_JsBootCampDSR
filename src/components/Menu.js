import React from 'react';
import Login from './Login';
import HomePage from './HomePage';
import ToDoList from './ToDoList';
import {userService} from '../services/UserService'
import  '../styles/Menu.css'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';   




export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          redirect: false,
        };
      }
    

 handleOnClickLogOut = event => {
    event.preventDefault();
    userService.logout();
    this.setState({ redirectTologin: true});
  }  
    render() {
        if (this.state.redirectTologin) {
            return <Redirect to="/login" />;
          }
        return(
            
                <div>
                    <Link className="link" to="/homepage">Home Page</Link>
                    <Link className="link" to="/todolist/">To Do List</Link>
                    <Link className="link" onClick = {this.handleOnClickLogOut} >Log Out</Link>
                </div>
        );
    }
}