import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

/*
 * Import reducers from local location
 */
import appReducer from './App.reducers';
import userReducer from './User.reducers';

/*
 * Combine all to rootReducer
 */
const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,

  // combine the reduce router to store
  router: routerReducer
});

export default rootReducer;




