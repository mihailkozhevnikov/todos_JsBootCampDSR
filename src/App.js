import React from 'react';
import './App.css';
import Login from './components/Login';
import {HomePage} from './components/HomePage';
import Users from "./components/Users";
import ToDoList from './components/ToDoList';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { PrivateRoute} from './components/PrivateRouter';
import { history } from './helpers/history';
import { connect } from 'react-redux';
import EditTodo from './components/EditTodo';
import { userActions} from './actions/UserActions';
import Loader from 'react-loader-spinner';
class App extends React.Component {
  constructor(props) {
      super(props);
      
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.checkServerAuthentication());
  }

  

  render() {
    const { alert, user, checkingAuthentication } = this.props;
    return (
      
    <div>
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        
        {!checkingAuthentication  &&
        <Router history={history}> 
          <PrivateRoute exact path="/" component={HomePage} role = {user ? user.role:""} canactivate={["admin","user"]} />
          <Route exact path="/login" component={Login}/>
          <PrivateRoute exact path="/homepage" role = {user ? user.role:""} canactivate={["admin","user"]} component={HomePage}/>
          <PrivateRoute exact path="/users" role = {user ? user.role:""} canactivate={["admin"]} component={Users}/>
          <PrivateRoute exact path="/todolist" role = {user ? user.role:""} canactivate={["admin","user"]} component={ToDoList}/>
          <PrivateRoute path="/edittodo/:id" role = {user ? user.role:""} canactivate={["admin","user"]} component={EditTodo}></PrivateRoute>
        </Router>
        }

{
          checkingAuthentication &&
               <Loader 
               type="Puff"
               color="#00BFFF"
               height="30"	
               width="30"
            />  
      }
    </div>
  );
}
}

function mapStateToProps(state) {
  const { user, checkingAuthentication } = state.authentication;
  const { alert } = state;
  return {
      alert, user, checkingAuthentication
  };
}

const connectedApp =  connect(mapStateToProps)(App);
export { connectedApp as App }; 