import { GETPRODUCTANDCATEGORIES,GETFAVORITES,GETCART,RESETORDERCOUNT,SETORDERCOUNT,COMPLETEDORDERS,PENDINGORDERS } from '../Types';
export const setCAtegoriesAndProduct = payload => {
    // console.log(payload)
    return {
        type: GETPRODUCTANDCATEGORIES,
        payload: payload
    }
};
export const setProducts = payload => {
    // console.log(payload)
    return {
        type: GETFAVORITES,
        payload: payload
    }
};
export const setCart = payload => {
    // console.log(payload)
    return {
        type: GETCART,
        payload: payload
    }
};
export const setOrderQuantity = payload => {
    // console.log(payload)
    return {
        type: SETORDERCOUNT,
        payload: payload
    }
};
export const setPendingOrders = payload => {
    // console.log(payload)
    return {
        type: PENDINGORDERS,
        payload: payload
    }
};
export const setCompletedOrders = payload => {
    // console.log(payload)
    return {
        type: COMPLETEDORDERS,
        payload: payload
    }
};
export const resetOrderQuantity = payload => {
    // console.log(payload)
    return {
        type: RESETORDERCOUNT,
        payload: payload
    }
};