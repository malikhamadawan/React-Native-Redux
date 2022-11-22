import {takeLatest, takeEvery} from 'redux-saga/effects';
import {BASE_URL, ENDPOINTS, getPostService} from '../../../shared/exporter';
import * as TYPES from '../../types/types';

export function* showAllPostSaga() {
  yield takeLatest(TYPES.GET_ALL_POST_REQUEST, getAllPostList);
}
function* getAllPostList(params) {
  try {
    const res = yield getPostService();
    if (res) {
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log('getAllPostError', error);
  }
}
