import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import cards from './reducer';

const composedEnhancers = composeWithDevTools(applyMiddleware());

const store = createStore(cards, composedEnhancers);

export default store;