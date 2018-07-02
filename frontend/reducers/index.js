import signup from './signup.js'
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

export default combineReducers({
    router,
    signup
  });