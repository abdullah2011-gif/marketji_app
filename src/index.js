import React, { Component } from 'react';
import Routes from './Routes/index';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import store from './Redux/index';
console.disableYellowBox = true;
function App() {
        return (<Provider store={store}>
            <Routes />
        </Provider>
        )
}
export default App;