import { LOGIN, LOGOUT } from '../Types';
export const login = payload => {
    console.log(login)
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