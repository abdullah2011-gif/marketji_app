


import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers/index';

import {persistStore, persistReducer} from 'redux-persist'
import { AsyncStorage } from 'react-native';
const persistConfig = {
    key : 'root',
    storage:AsyncStorage,
    whitelist:['Auth','App']
}
const persistedReducer = persistReducer(persistConfig,Reducers)
const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
export default store;