import { LOGIN } from '../Types';
const intialState = {
    
}
const reducer = (state = intialState, action) => {
    // console.log(action)
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                user: action.payload,
                isLogin: true
            }
        }
        default:
            return state

    }
}
export default reducer;