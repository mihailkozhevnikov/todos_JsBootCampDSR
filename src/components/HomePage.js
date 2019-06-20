
import React, { Component } from "react";
import Menu from './Menu';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

  class HomePage extends Component {
  constructor(props) {
    super(props);


  }
  
  render() {
    const { user , loggedIn} = this.props;
    if (!loggedIn) {
      return <Redirect to='/login'/>;
    }
    return (
      <div className="Home Page">
      <Menu />
      <br/>
      Hello, {user.name}
      </div>
    );
  }
}



function mapStateToProps(state) {
  const  {user, loggedIn} = state.authentication;
  return {
    user, loggedIn
  };
}


const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };