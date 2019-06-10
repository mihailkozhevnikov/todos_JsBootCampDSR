import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import ToDoList from './components/ToDoList';
import { BrowserRouter as Router, Route, Link , Redirect  } from 'react-router-dom'
import { PrivateRoute} from './components/PrivateRouter';


function App() {

  return (
    <div>
        <Router> 
          <PrivateRoute exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login}/>
          <PrivateRoute exact path="/homepage" component={HomePage}/>
          <PrivateRoute exact path="/todolist" component={ToDoList}/>
        </Router>
      
    </div>
  );
}

export default App;
