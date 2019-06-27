import { userConstants } from '../constants/user.constants';

const initialState = {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};

      case userConstants.ME_REQUEST:
        return {
          loggingIn: true,
        };
      case userConstants.ME_SUCCESS:
        return {
          loggedIn: true,
          user: action.user
        };
      case userConstants.ME_FAILURE:
        return {};

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
          return {};

    default:
      return state
  }
}