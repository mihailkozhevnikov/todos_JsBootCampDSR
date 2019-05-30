import React from 'react';
import Login from './Login';
import HomePage from './HomePage';
import ToDoList from './ToDoList';
import  '../styles/Menu.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';   


export default class Menu extends React.Component {
    render() {
        return(
                <div>
                    <Link className="link" to="/homepage">Home Page</Link>
                    <Link className="link" to="/todolist/">To Do List</Link>
                    <Link className="link" to="/login/">Log Out</Link>
                </div>
        );
    }
}