import React from 'react';
import './App.css';
import Login from './components/Login';
import {HomePage} from './components/HomePage';
import Users from "./components/Users";
import ToDoList from './components/ToDoList';
import { BrowserRouter as Router, Route, Link , Redirect } from 'react-router-dom'
import { PrivateRoute} from './helpers/PrivateRouter';
import { history } from './helpers/history';
import { connect } from 'react-redux';
import {alertActions} from './actions/AlertActions';
import EditTodo from './components/EditTodo';
import { userActions} from './actions/UserActions';
class App extends React.Component {
  constructor(props) {
      super(props);
      
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.checkServerAuthentication());
  }

  render() {
    const { alert } = this.props;
    return (
    <div>
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Router history={history}> 
          <PrivateRoute exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login}/>
          <PrivateRoute exact path="/homepage" component={HomePage}/>
          <PrivateRoute exact path="/users" component={Users}/>
          <PrivateRoute exact path="/todolist" component={ToDoList}/>
          <PrivateRoute path="/edittodo/:id" component={EditTodo}></PrivateRoute>
        </Router>
      
    </div>
  );
}
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp =  connect(mapStateToProps)(App);
export { connectedApp as App }; 