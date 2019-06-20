import React from 'react';
import Login from './Login';
import HomePage from './HomePage';
import ToDoList from './ToDoList';
import {userService} from '../services/UserService';
import { connect } from 'react-redux';
import  '../styles/Menu.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';   
import {userActions} from "../actions/UserActions";




class Menu extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          redirect: false,
        };
      }
    
  
 handleOnClickLogOut = event => {
    
    event.preventDefault();
    const { dispatch, } = this.props;
    dispatch(userActions.logout());  
  }  
  
    render() {
      const { loggedIn } = this.props;
      const { user } = this.props;
        if (!loggedIn) {
            return <Redirect to="/login" />;
          }
        return(
            
                <div>
                    <Link className="link" to="/homepage">Home Page</Link>
                    <Link className="link" to="/todolist/">To Do List</Link>
                    {user && user.role == 'admin' &&
                            <Link className="link" to="/users/">Users</Link>
                    }                   
                    <Link className="link" onClick = {this.handleOnClickLogOut} >Log Out</Link>
                </div>
        );
    }
}

function mapStateToProps(state) {
  const  { loggedIn, user} = state.authentication;
  return {
     loggedIn, user
  };
}

export default Menu = connect(mapStateToProps)(Menu);