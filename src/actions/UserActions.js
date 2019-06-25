import { userConstants } from '../constants/user.constants';
import { userService } from '../services/UserService';
import { alertActions } from './AlertActions';
import { history } from '../helpers/history';
import { handledError} from '../helpers/errorHandler';

export const userActions = {
    login,
    logout,
    getAll,
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
    userService.logout();
    history.push('/');
    return { type: userConstants.LOGOUT };
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

