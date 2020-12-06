import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import cards from './reducer';
import thunk from "redux-thunk";

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(cards, composedEnhancers);

export default store;