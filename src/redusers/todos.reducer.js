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
          loading: true
        };
      case todoConstants.ADD_SUCCESS:
        return {
          todosItems: [
            ...state.todosItems,
            {
              id: action.todo.id,
              title: action.todo.title,
              description: action.todo.description,
              createdBy: action.todo.createdBy
            }
          ]
        };
      case todoConstants.ADD_FAILURE:
        return { 
          error: action.error
        };
    
    default:
      return state
  }
}