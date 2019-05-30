import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import ToDoList from './components/ToDoList';
import { BrowserRouter as Router, Route, Link , Redirect  } from 'react-router-dom'

function App() {
  return (
    <div>
        <Router> 
          <Route exact path="/login" component={Login}/>
          <Route exact path="/homepage" component={HomePage}/>
          <Route exact path="/todolist" component={ToDoList}/>
        </Router>
      
    </div>
  );
}

export default App;
