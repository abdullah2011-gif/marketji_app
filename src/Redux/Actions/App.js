import { GETPRODUCTANDCATEGORIES } from '../Types';
export const setCAtegoriesAndProduct = payload => {
    // console.log(payload)
    return {
        type: GETPRODUCTANDCATEGORIES,
        payload: payload
    }
};