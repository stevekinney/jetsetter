import { applyMiddleware, compose, createStore } from 'redux';

import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { fetchItems } from '../actions/items-actions'

import saga from './saga';

import reducers from '../reducers';
import initialState from './initial-state';
// import { getAllItems } from '../actions/items-actions';

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);

store.dispatch(fetchItems());

sagaMiddleware.run(saga);

export default store;
