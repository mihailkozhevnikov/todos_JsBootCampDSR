import React from 'react';
import { connect } from 'react-redux';
import { todosActions} from '../actions/TodosActions';
import { alertActions} from "../actions/AlertActions";
import Menu from './Menu';
import Loader from 'react-loader-spinner';

 class EditTodo extends React.Component { 

  constructor(props) {
    super(props);
    const { loading, editedItem } = this.props;
    this.state = {
      editTodoTitle: '',
      editTodoDescription: '',
      setFirst: true
    }
  }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(todosActions.getToDoByid(this.props.match.params.id));
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
      
      handleAddSubmit = event => {
        event.preventDefault();
        const { editTodoTitle, editTodoDescription } = this.state;
        const { dispatch } = this.props;
        dispatch(alertActions.clear());
        let { editedItem } = this.props;
        dispatch(todosActions.updateTodo(editedItem.id,editTodoTitle,editTodoDescription));
      }

    render() {
        const { loading, editedItem } = this.props;
        if(editedItem && this.state.setFirst){
        this.state = {
          editTodoTitle: editedItem.title,
          editTodoDescription: editedItem.description,
          setFirst: false
        }
      }
        return(
            
            <div>
                      <Menu /> <br/>
      Edit To Do
      {
        loading &&
               <Loader 
               type="Puff"
               color="#00BFFF"
               height="30"	
               width="30"
            />  
      }
      { !loading && editedItem &&
          
          <form onSubmit={this.handleAddSubmit} className="form-inline">
          <div className="form-group">
          <input className="form-control" onChange={this.handleChange} value={this.state.editTodoTitle} id ="editTodoTitle" placeholder="Title" type = "text"/>
          <input className="form-control" onChange={this.handleChange} value={this.state.editTodoDescription} id ="editTodoDescription" placeholder="Description"  type = "text"/>
          <button className="btn btn-success">Save</button>
        </div>
        </form>
    }
    </div>);
  }
}

function mapStateToProps(state) {
    const  {loggedIn} = state.authentication;
    const  {loading, editedItem } = state.todos;
    return {
       loggedIn, loading, editedItem 
    };
  }

export default EditTodo = connect(mapStateToProps)(EditTodo);