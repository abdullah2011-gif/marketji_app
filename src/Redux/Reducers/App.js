import { GETPRODUCTANDCATEGORIES } from '../Types';
const intialState = {
    categoriesAndProduct:[]
}
const reducer = (state = intialState, action) => {
    // console.log(action)
    switch (action.type) {
        case GETPRODUCTANDCATEGORIES: {
            return {
                ...state,
                categoriesAndProduct: action.payload
            }
        }
        default:
            return state

    }
}
export default reducer;