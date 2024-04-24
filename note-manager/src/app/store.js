import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from "redux-thunk";
import { TodoReducer } from './reducers/TodoReducer';

const reducer = combineReducers({
    Todo:TodoReducer
});

const initialState={
    todos:[],
};

const middleware=[thunk];

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;