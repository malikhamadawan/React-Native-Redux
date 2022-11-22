import {combineReducers} from 'redux';
import {deletePostReducer} from './deletePost-Reducer/deletePost-Reducer';
import {getPostReducer} from './getPost-Reducer/getPost-Reducer';

const appReducer = combineReducers({
  getPost: getPostReducer,
  deletePost: deletePostReducer,
});

export default appReducer;
