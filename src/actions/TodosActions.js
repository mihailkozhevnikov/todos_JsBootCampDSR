import { todoConstants } from '../constants/todo.constants';
import { toDosService } from '../services/ToDoService';
import { alertActions } from './AlertActions';


export const todosActions = {
    getAll,
    add
};

function getAll() {
    return dispatch => {
        dispatch(request());
        toDosService.getAll()
            .then(
                todos => dispatch(success(todos)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: todoConstants.GETALL_REQUEST } }
    function success(todos) { return { type: todoConstants.GETALL_SUCCESS, todos } }
    function failure(error) { return { type: todoConstants.GETALL_FAILURE, error } }
}

function add(title,description) {
    return dispatch => {
        dispatch(request());
        toDosService.add(title,description)
            .then(
                todo => dispatch(success(todo)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: todoConstants.ADD_REQUEST } }
    function success(todo) { return { type: todoConstants.ADD_SUCCESS, todo } }
    function failure(error) { return { type: todoConstants.ADD_FAILURE, error } }
}

