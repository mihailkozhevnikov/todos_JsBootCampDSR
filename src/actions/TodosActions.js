import { todoConstants } from '../constants/todo.constants';
import { toDosService } from '../services/ToDoService';
import { alertActions } from './AlertActions';
import { handledError} from '../helpers/errorHandler';


export const todosActions = {
    getAll,
    add,
    deleteByid,
    getToDoByid,
    updateTodo
};

function getAll() {
    return dispatch => {
        dispatch(alertActions.clear());
        dispatch(request());
        toDosService.getAll()
            .then(
                todos => dispatch(success(todos)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(handledError(error)));
                }
            );
    };

    function request() { return { type: todoConstants.GETALL_REQUEST } }
    function success(todos) { return { type: todoConstants.GETALL_SUCCESS, todos } }
    function failure(error) { return { type: todoConstants.GETALL_FAILURE, error } }
}

function add(title,description) {
    return dispatch => {
        dispatch(alertActions.clear());
        dispatch(request());
        toDosService.add(title,description)
            .then(
                todo =>  { 
                    dispatch(success(todo));
                    dispatch(alertActions.success("To Do " + todo.title + " added succsessfull"))
                },
                error => {
                    dispatch(failure(handledError(error)));
                    dispatch(alertActions.error(handledError(error)));
                }
            );
    };

    function request() { return { type: todoConstants.ADD_REQUEST } }
    function success(todo) { return { type: todoConstants.ADD_SUCCESS, todo } }
    function failure(error) { return { type: todoConstants.ADD_FAILURE, error } }
}

function deleteByid(id) {
    return dispatch => {
        dispatch(alertActions.clear());
        dispatch(request());
        toDosService.deleteByid(id)
            .then(
                id => {
                    dispatch(success(id));
                    dispatch(alertActions.success("To Do deleted succsessfull"))
                },
                error => 
                {
                    dispatch(failure(handledError(error)));
                    dispatch(alertActions.error(handledError(error)));
                }
            );
    };

    function request() { return { type: todoConstants.DELETE_REQUEST } }
    function success(id) { return { type: todoConstants.DELETE_SUCCESS, id } }
    function failure(error) { return { type: todoConstants.DELETE_FAILURE, error } }
}

function getToDoByid(id) {
    return dispatch => {
        dispatch(alertActions.clear());
        dispatch(request());
        toDosService.getToDoByid(id)
            .then(
                todo => {
                    dispatch(success(todo));
                    dispatch(alertActions.success("To Do " + todo.title + " received succsessfull"))
                },
                error => 
                {
                    dispatch(failure(handledError(error)));
                    dispatch(alertActions.error(handledError(error)));
                }
            );
    };

    function request() { return { type: todoConstants.GET_REQUEST } }
    function success(todo) { return { type: todoConstants.GET_SUCCESS, todo } }
    function failure(error) { return { type: todoConstants.GET_FAILURE, error } }
}

function updateTodo(id ,title,description) {
    return dispatch => {
        dispatch(alertActions.clear());
        dispatch(request());
        toDosService.updateToDo(id, title,description)
            .then(
                res => {
                    dispatch(success());
                    dispatch(alertActions.success("To Do updated succsessfull"))
                },
                error => 
                {
                    dispatch(failure(handledError(error)));
                    dispatch(alertActions.error(handledError(error)));
                }
            );
    };

    function request() { return { type: todoConstants.GET_REQUEST } }
    function success() { return { type: todoConstants.GET_SUCCESS } }
    function failure(error) { return { type: todoConstants.GET_FAILURE, error } }
}

