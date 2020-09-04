import { LOGIN, LOGOUT,SETUSER,LOADING } from '../Types';
export const login = payload => {
    // console.log(login)
    return {
        type: LOGIN,
        payload: payload
    }
};
export const logout = () => {
    return {
        type: LOGOUT,
        payload: { uid: '' }
    }
};
export const setUser = (payload) => {
    return {
        type: SETUSER,
        payload:payload
    }
};
export const setLoading = payload => {
    return {
        type: LOADING,
        payload: payload
    }
};