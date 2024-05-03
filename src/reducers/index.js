// reducers/index.js
import { combineReducers } from 'redux';
import todosReducer from './todosReducer'; // example reducer

const rootReducer = combineReducers({
  todos: todosReducer,
  // other reducers...
});

export default rootReducer;
