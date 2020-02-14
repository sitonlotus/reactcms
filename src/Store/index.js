import {createStore,applyMiddleware, compose } from 'redux';
import reducer from './reducer.js';
import thunk from 'redux-thunk';

//关联，根据reducer创建store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhance=composeEnhancers(
    applyMiddleware(thunk)
)
const store = createStore(reducer,enhance)

export default store;