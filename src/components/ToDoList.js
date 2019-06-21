import React, { Component } from "react";
import axios from "axios";
import Menu from './Menu';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { todosActions} from '../actions/TodosActions';
import { alertActions} from "../actions/AlertActions";

axios.defaults.withCredentials = true;

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoTitle: "",
      newTodoDescription: "",
    }
 
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(todosActions.getAll());
  }
  text() {
    const { todosItems } = this.props;
    return todosItems && todosItems.map((toDo) => {
       return <tr key={toDo.id}>
            <td>{toDo.id}</td>
            <td>
            {toDo.title}
            </td>
            <td>
            {toDo.description}
            </td>
            <td>
            {toDo.createdBy}
            </td>
        </tr>
    });
}

handleChange = event => {
  debugger
  this.setState({
    [event.target.id]: event.target.value
  });
}

handleSubmit = event => {
  event.preventDefault();
  const { newTodoTitle, newTodoDescription } = this.state;
  const { dispatch } = this.props;
  dispatch(alertActions.clear());
  dispatch(todosActions.add(newTodoTitle, newTodoDescription));

}

  render() {
    const { loading } = this.props;
    return (
      <div className="ToDoList">
      <Menu /> <br/>
      To Do List
      {
        loading &&
               <Loader 
               type="Puff"
               color="#00BFFF"
               height="30"	
               width="30"
            />  
      }
      { !loading &&
      <div>
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.newTodoTitle}  id ="newTodoTitle" placeholder="Title" type = "text"/>
        <input onChange={this.handleChange} value={this.state.newTodoDescription} id ="newTodoDescription" placeholder="Description"  type = "text"/>
        <button>Add ToDo</button>
        </form>
        <br/>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>autor</th>
              </tr>
              </thead>
                  <tbody>
                      {this.text()}
                  </tbody>
                  </table>
       </div>
      }
      </div>
    );
      
  }
}

function mapStateToProps(state) {
  const  { loggedIn, user } = state.authentication;
  const  { todosItems, loading } = state.todos;
  return {
       loggedIn, user, todosItems, loading
  };
}

export default ToDoList = connect(mapStateToProps)(ToDoList);