import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { users } from './users.reducer';


export default rootReducer = combineReducers({
  authentication,
  users,
});

