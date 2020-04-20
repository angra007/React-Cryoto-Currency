import {Platform} from 'react-native';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import RootReducer from './Reducers';

const initialState = {};
const middleware = applyMiddleware (thunk, promise);

const Store = createStore (
    RootReducer,
    initialState,
    middleware
);

export default Store;