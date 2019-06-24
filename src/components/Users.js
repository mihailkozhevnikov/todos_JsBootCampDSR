import React, { Component } from "react";
import axios from "axios";
import Menu from './Menu';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { userActions} from '../actions/UserActions';

axios.defaults.withCredentials = true;

 class Users extends Component {
  constructor(props) {
    super(props);
 
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.getAll());
  }
  text() {
    const { items } = this.props;
    return  items && items.map((userItem) => {
       return <tr key={userItem.login}>
            <td>{userItem.login}</td>
            <td>
            {userItem.role}
            </td>
            <td>
            {userItem.name}
            </td>
        </tr>
    });
}

  render() {
    
    const { loading ,user} = this.props;
    if (user.role != "admin")
    {
      return <Redirect to="/login" />;
    }
    return (
      <div className="ToDoList">
      <Menu /> <br/>
      Users
      { loading && <Loader 
           type="Puff"
           color="#00BFFF"
           height="30"	
           width="30"
        /> }     
      {!loading && <table>
          <thead>
              <tr>
                  <th>login</th>
                  <th>role</th>
                  <th>name</th>                
            </tr>
            </thead>
                <tbody>
                     {this.text()}
                 </tbody>
                </table>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const  { loggedIn, user } = state.authentication;
  const  { items ,loading} = state.users;
  return {
       loggedIn, user, items, loading
  };
}

export default Users = connect(mapStateToProps)(Users);