import { userConstants } from '../constants/user.constants';
import { userService } from '../services/UserService';
import { alertActions } from './AlertActions';
import  {handledError} from '../helpers/errorHandler';

export const userActions = {
    login,
    logout,
    getAll,
    checkServerAuthentication,
    logoutNotAuthorized
};

function login(username, password) {
    return dispatch => {
        dispatch(alertActions.clear());
        dispatch(request({ username }));

        userService.login(username, password)
            .then(                
                user => { 
                    dispatch(success(user));
                    
                },
                error => {
                    dispatch(failure(handledError(error)));
                    dispatch(alertActions.error(handledError(error)));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    return dispatch => {
        dispatch(alertActions.clear());
        dispatch(request());

        userService.logout()
            .then(                
                user =>{ 
                    dispatch(success());                   
                },
                error => {
                    dispatch(failure(handledError(error)));
                    dispatch(alertActions.error(handledError(error)));
                }
            );
    };

    function request() { return { type: userConstants.LOGOUT_REQUEST } }
    function success() { return { type: userConstants.LOGOUT_SUCCESS} }
    function failure(error) { return { type: userConstants.LOGOUT_FAILURE, error } }
}

function logoutNotAuthorized() {
    return dispatch => {
        dispatch(alertActions.error("Not authorized"));
        dispatch(success());                   
    };

    function success() { return { type: userConstants.LOGOUT_NOT_AUTORUZED} }
}


function getAll() {
    return dispatch => {
        dispatch(alertActions.clear());
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error =>
                {
                     dispatch(failure(error));
                     dispatch(alertActions.error(handledError(error)));
                }
            )
            ;
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function checkServerAuthentication() {
    return dispatch => {
        dispatch(alertActions.clear());
        dispatch(request());

        userService.me()
            .then(                
                user => { 
                    dispatch(success(user));
                    
                },
                error => {
         if (error.response.data)
            {
                dispatch(failure(error.response.data.message));    
            }
            else{
                dispatch(failure(error.response.statusText + " " + error.response.status));
            }
                }                                 
                
            );
    };

    function request(user) { return { type: userConstants.ME_REQUEST, user } }
    function success(user) { return { type: userConstants.ME_SUCCESS, user } }
    function failure(error) { return { type: userConstants.ME_FAILURE, error } }
}

