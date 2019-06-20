import { userConstants } from '../constants/user.constants';
import { userService } from '../services/UserService';
  

function login(username, password) {
  return dispatch => {
      dispatch(request({ username }));

      userService.login(username, password)
          .then(
              user => { 
                  dispatch(success(user));
                  history.push('/');
              },
              error => {
                  dispatch(failure(error));
                  dispatch(alertActions.error(error));
              }
          );
  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

  export const loginAction = (userName, userRole) => {
    return {
      type: 'LOG_IN',
      userName: userName,
      userRole: userRole
    };
  };
  
  export const logoutAction = () => {
    return {
      type: 'LOG_OUT'
    };
  };