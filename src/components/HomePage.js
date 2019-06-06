
import React, { Component } from "react";
import Menu from './Menu';
import { connect } from 'react-redux';

export default class HomePage extends Component {
  constructor(props) {
    super(props);


  }
  
  render() {
    const { userName} = this.props;
    return (
      <div className="Home Page">
      <Menu />
      <br/>
      Hello, {userName}
      {console.log(this.props)}
      </div>
    );
  }
}



function mapStateToProps(state) {
  console.log(state);
      userName: state.userName
    }


const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };