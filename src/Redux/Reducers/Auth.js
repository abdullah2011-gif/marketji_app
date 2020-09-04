import { LOGIN, LOGOUT,SETUSER,LOADING } from '../Types';
const intialState = {
    user: {
    },
    isLogin: false,
    loading:{
        visible:false
    }
}
const reducer = (state = intialState, action) => {
    console.log(action)
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                user: action.payload,
                isLogin: true
            }
        }
        case LOGOUT: {
            return {
                ...state,
                user: {},
                isLogin: false
            }
        }
        case SETUSER: {
            return {
                ...state,
                user: {...state.user,...action.payload},
            }
        }  
        case LOADING: {
            return {
                ...state,
                loading: {
                    visible:action.payload,
                },
            }
        }
        default:
            return state

    }
}
export default reducer;