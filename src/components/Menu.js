import React from 'react';
import { connect } from 'react-redux';
import  '../styles/Menu.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';   
import {userActions} from "../actions/UserActions";
import Loader from 'react-loader-spinner';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          redirect: false,
        };
      }
     
 handleOnClickLogOut = event => {
    
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(userActions.logout());  
  }  
  
    render() {
      const { loggedIn, loggingOut, user } = this.props;
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
                    {loggingOut && 
               <Loader 
               type="Puff"
               color="#00BFFF"
               height="30"	
               width="30"
            />   }
                </div>
        );
    }
}

function mapStateToProps(state) {
  const  { loggedIn, user, loggingOut} = state.authentication;
  return {
     loggedIn, user, loggingOut
  };
}

export default Menu = connect(mapStateToProps)(Menu);