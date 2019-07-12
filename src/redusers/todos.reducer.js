import { todoConstants  } from '../constants/todo.constants';

export function todos(state = {}, action) {
  switch (action.type) {
    case todoConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case todoConstants.GETALL_SUCCESS:
      return {
        todosItems: action.todos
      };
    case todoConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };

      case todoConstants.ADD_REQUEST:
        return {
          ...state,
          loading: true
        };
      case todoConstants.ADD_SUCCESS:
        return {    
            todosItems: [...state.todosItems, action.todo]
        };
      case todoConstants.ADD_FAILURE:
        return { 
          ...state,
          loading: false,
          error: action.error
        };


        case todoConstants.DELETE_REQUEST:
            return {
              ...state,
              loading: true
            };
          case todoConstants.DELETE_SUCCESS:
            debugger
            return {   
              ...state,
              loading: false, 
                todosItems: state.todosItems.filter(item => item.id !== action.id)
            };
          case todoConstants.DELETE_FAILURE:
            return { 
              ...state,
              loading: false,
              error: action.error
            };

            case todoConstants.GET_REQUEST:
              return {
                ...state,
                loading: true
              };
            case todoConstants.GET_SUCCESS:
              return {   
                ...state,
                loading: false,
                editedItem: action.todo
              };
            case todoConstants.GET_FAILURE:
              return { 
                ...state,
                loading: false,
                error: action.error
              };

              case todoConstants.UPDATE_REQUEST:
                return {
                  ...state,
                  loading: true
                };
              case todoConstants.UPDATE_SUCCESS:
                return {  
                  ...state,
                  loading: false,                      
                };
              case todoConstants.UPDATE_FAILURE:
                return { 
                  ...state,
                  loading: false,
                  error: action.error
                };
    
    default:
      return state
  }
}