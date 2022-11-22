import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import appReducer from '../reducers';
import {rootSaga} from '../saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
