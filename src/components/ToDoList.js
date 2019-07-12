import React, { Component } from "react";
import axios from "axios";
import Menu from './Menu';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { todosActions} from '../actions/TodosActions';
import { alertActions} from "../actions/AlertActions";
import { Link  } from 'react-router-dom';

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
    const { todosItems, user } = this.props;
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
            <td>
            {user && (user.role=="admin"||user.role==toDo.createdBy) && <Link to={"/edittodo/"+toDo.id}  
              style = {{ marginRight: '10px'}} className="btn btn-warning"> Edit</Link>}
            {user && (user.role=="admin"||user.role==toDo.createdBy) && <button className="btn btn-danger" onClick = {this.handleDeleteTodo(toDo.id)}> delete</button>}
            </td>
        </tr>
    });
}

handleChange = event => {
  this.setState({
    [event.target.id]: event.target.value
  });
}

handleAddSubmit = event => {
  event.preventDefault();
  const { newTodoTitle, newTodoDescription } = this.state;
  const { dispatch } = this.props;
  dispatch(alertActions.clear());
  dispatch(todosActions.add(newTodoTitle, newTodoDescription));
  this.setState( {
    newTodoTitle: "",
    newTodoDescription: "",
  });
}

handleDeleteTodo(id) {
  return (e) => {
    const { dispatch } = this.props;
    dispatch(alertActions.clear());
    dispatch(todosActions.deleteByid(id));
  }
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

         <form onSubmit={this.handleAddSubmit} className="form-inline">
        <div className="form-group">
          <input className="form-control" onChange={this.handleChange} value={this.state.newTodoTitle}  id ="newTodoTitle" placeholder="Title" type = "text"/>
          <input className="form-control" onChange={this.handleChange} value={this.state.newTodoDescription} id ="newTodoDescription" placeholder="Description"  type = "text"/>
          <button className="btn btn-primary">+Add ToDo</button>
        </div>

        </form> 
        <br/>
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>autor</th>
                    <th></th>
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