
import React, { Component } from "react";
import axios from "axios";
import Menu from './Menu';
import Loader from 'react-loader-spinner';
import { toDosService} from '../services/ToDoService';

axios.defaults.withCredentials = true;

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        toDos: [],
        loading: false
    }
 
  }

  componentDidMount() {
    this.setState({loading: true});
    toDosService.getTodos()
       .then (res => {         
                this.setState({toDos: res, loading: false});          
        });
  }
  text() {
    return this.state.toDos.map((toDo) => {
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
      To Do List
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
    );
  }
}