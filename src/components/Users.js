
import React, { Component } from "react";
import axios from "axios";
import Menu from './Menu';
import Loader from 'react-loader-spinner';
import { toDosService} from '../services/ToDoService';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { userActions} from '../actions/UserActions';

axios.defaults.withCredentials = true;

 class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
        toDos: [],
        loading: false
    }
 
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
   if(this.state.loading)
   {
    return(
        <Loader 
           type="Puff"
           color="#00BFFF"
           height="50"	
           width="50"
        />   
       );
   }

    return (
      <div className="ToDoList">
      <Menu /> <br/>
      Users
      <table>
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
                </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const  { loggedIn, user } = state.authentication;
  const  { items} = state.users;
  console.log(state);
  return {
       loggedIn, user, items
  };
}

export default Users = connect(mapStateToProps)(Users);