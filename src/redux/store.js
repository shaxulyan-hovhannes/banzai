import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

import companyLogo from 'redux/logo/reducers';
import drawer from 'redux/drawer/reducers';
import content from 'redux/content/reducers';

const reducers = combineReducers({
  companyLogo,
  drawer,
  content,
});
const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(sagaMiddleware);

const store = createStore(reducers, compose(middlewareEnhancer));

sagaMiddleware.run(rootSaga);

export default store;
