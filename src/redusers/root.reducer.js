import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { todos } from './todos.reducer';
import { users } from './users.reducer';
import { alert} from './alert.reducer';


const rootReducer = combineReducers({
  authentication,
  users,
  todos,
  alert
});

export default rootReducer;