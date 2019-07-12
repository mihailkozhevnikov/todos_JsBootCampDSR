import { userConstants } from '../constants/user.constants';

const initialState = {
  checkingAuthentication: true,
  loggingIn: false,
  user: null,
  loggedIn:  false,
  loggingOut:  false
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggingIn: false,
        user: null,
        loggedIn:  false,
        loggingOut:  false
      };

      case userConstants.ME_REQUEST:
        return {
          ...state,
          loggingIn: true,
          checkingAuthentication: true,
        };
      case userConstants.ME_SUCCESS:
        return {
          ...state,
          loggedIn: true,
          loggingIn: false,
          user: action.user,
          checkingAuthentication: false
        };
      case userConstants.ME_FAILURE:
        return {
          checkingAuthentication: false
        };

        case userConstants.LOGOUT_REQUEST:
          return {
            ...state,
            loggingOut: true,
          };
        case userConstants.LOGOUT_SUCCESS:
          return {
          };
        case userConstants.LOGOUT_FAILURE:
          return {...state,
            loggingOut: false,
          };

          case userConstants.LOGOUT_NOT_AUTORUZED:
          return {
            checkingAuthentication: false,
            loggingIn: false,
            user: null,
            loggedIn:  false,
            loggingOut:  false
          };

    default:
      return state
  }
}