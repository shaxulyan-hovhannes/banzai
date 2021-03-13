import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const reducers = combineReducers({});
const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(sagaMiddleware);

const store = createStore(reducers, compose(middlewareEnhancer));

sagaMiddleware.run(rootSaga);

export default store;
