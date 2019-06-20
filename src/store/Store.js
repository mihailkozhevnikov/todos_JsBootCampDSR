
import React, { Component } from "react";
import { createStore, bindActionCreators } from "redux";
//import { rootReducer } from "../redusers/root.reducer";
import { authentication } from "../redusers/authentication.reducer";


// export default class Store extends Component {
//   constructor(props) {
//     super(props);
    
//   }
// }
//   let user = JSON.parse(localStorage.getItem('user'));
//   const initialState = user ? { isLoggedIn: true, userName: user.name } : {};
   
  // export const reducer = function(state = initialState, action) {
  //   switch (action.type) {
  //     case 'LOG_IN':
  //       return Object.assign({}, state, { 
  //         isLoggedIn: true,
  //         userName: action.userName, 
  //         userRole: action.userRole
  //     });
  //     case 'LOG_OUT':
  //       return Object.assign({}, state, { 
  //           isLoggedIn: false,
  //           userName: '',
  //       });
  //     default:
  //       return state;
  //   }
  // };
  export const store = createStore(authentication, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


