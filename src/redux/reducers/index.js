import {combineReducers} from 'redux';
import {counterReducer} from './reducers';

const appReducer = combineReducers({
  counterReducer,
});

export default appReducer;
