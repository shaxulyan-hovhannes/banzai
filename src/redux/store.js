import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

import companyLogo from 'redux/logo/reducers';

const reducers = combineReducers({
  companyLogo,
});
const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(sagaMiddleware);

const store = createStore(reducers, compose(middlewareEnhancer));

sagaMiddleware.run(rootSaga);

export default store;
