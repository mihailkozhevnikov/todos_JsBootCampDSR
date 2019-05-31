
import React, { Component } from "react";
import Menu from './Menu';
import {store}  from '../store/Store';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: ""
    };
  }
  
  updateStore(){
  store.subscribe(()=> this.state.userName = store.getState().userName);
  }
  
  render() {
    return (
      <div className="Home Page">
      <Menu />
      <br/>
      Hello, {this.state.userName}
      {console.log(store.getState())}
      </div>
    );
  }
}