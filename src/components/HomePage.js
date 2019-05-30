
import React, { Component } from "react";
import Menu from './Menu'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home Page">
      <Menu />
      <br/>
      Hello, ...
      </div>
    );
  }
}