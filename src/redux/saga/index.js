import {fork} from 'redux-saga/effects';
import {deletePostSaga} from './deletePost-saga/deletePost-saga';
import {showAllPostSaga} from './getPost-saga/getPost-saga';

export function* rootSaga() {
  yield fork(showAllPostSaga);
  yield fork(deletePostSaga);
}
