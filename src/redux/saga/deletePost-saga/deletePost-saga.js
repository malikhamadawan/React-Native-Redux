import {takeLatest, takeEvery} from 'redux-saga/effects';
import {deletePostService} from '../../../shared/exporter';
import * as TYPES from '../../types/types';

export function* deletePostSaga() {
  yield takeEvery(TYPES.DELETE_POST_REQUEST, deletePost);
}
function* deletePost(params) {
  console.log(params);
  try {
    const res = yield deletePostService(params);
    if (res) {
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log('error', error);
    params?.cbFailure('deletePostError', error);
  }
}
