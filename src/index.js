
import React, { Component } from 'react';
import Routes from './Routes/index';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import {persistStore} from 'redux-persist'
import store from './Redux/index';
import {PersistGate} from 'redux-persist/es/integration/react'
console.disableYellowBox = true;
const persistedStore = persistStore(store)
class App extends Component {
    render() {
        return (<Provider store={store}>
            <PersistGate persistor={persistedStore} loading={null}>
            <Routes />
            </PersistGate>
        </Provider>
        )
    }
}
export default App;