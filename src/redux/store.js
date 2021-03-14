import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

import companyLogo from 'redux/logo/reducers';
import drawer from 'redux/drawer/reducers';

const reducers = combineReducers({
  companyLogo,
  drawer,
});
const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(sagaMiddleware);

const store = createStore(reducers, compose(middlewareEnhancer));

sagaMiddleware.run(rootSaga);

export default store;
