import { userConstants } from '../constants/user.constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        ...state,
        loading: false,
        error: action.error
      };
    
    default:
      return state
  }
}