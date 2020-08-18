import Auth from './Auth'
import App from './App'
import { combineReducers } from 'redux'

export default combineReducers({
    Auth: Auth,
    App: App,
});
