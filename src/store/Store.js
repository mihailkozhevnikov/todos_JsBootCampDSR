
import React, { Component } from "react";
import { createStore, bindActionCreators } from "redux";
import { Provider, connect } from "react-redux";

export default class Store extends Component {
  constructor(props) {
    super(props);
    
  }
}
export const initialState = {
    isLoggedIn: false,
    userName: '',
    userRole: ''
  };
  
  
  export const loginAction = (userName, userRole) => {
    return {
      type: 'LOG_IN',
      userName: userName,
      userRole: userRole
    };
  };
  
  export const logoutAction = () => {
    return {
      type: 'LOG_OUT'
    };
  };
  
  
  export const reducer = function(state = initialState, action) {
    switch (action.type) {
      case 'LOG_IN':
        return Object.assign({}, state, { 
          isLoggedIn: true,
          userName: action.userName, 
          userRole: action.userRole
      });
      case 'LOG_OUT':
        return Object.assign({}, state, { 
            isLoggedIn: false,
            userName: '',
        });
      default:
        return state;
    }
  };
  export const store = createStore(reducer);


