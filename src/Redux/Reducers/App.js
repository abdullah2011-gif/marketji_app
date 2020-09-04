import { GETPRODUCTANDCATEGORIES,GETFAVORITES,GETCART,SETORDERCOUNT,RESETORDERCOUNT,COMPLETEDORDERS,PENDINGORDERS } from '../Types';
const intialState = {
    categoriesAndProduct:[],
    favorites:[],
    cart:[],
    pendingOrders:[],
    completedOrders:[]
}
const reducer = (state = intialState, action) => {
    console.log(action)
    switch (action.type) {
        case GETPRODUCTANDCATEGORIES: {
            return {
                ...state,
                categoriesAndProduct: action.payload
            }
        }
        case GETFAVORITES: {
            return {
                ...state,
                favorites: action.payload
            }
        }
        case PENDINGORDERS: {
            return {
                ...state,
                pendingOrders: action.payload
            }
        }
        case COMPLETEDORDERS: {
            return {
                ...state,
                completedOrders: action.payload
            }
        }
        case SETORDERCOUNT: {
            return {
                ...state,
                cart: state.cart.map(item=>{
                    if(item._id==action.payload){
                        return{
                            ...item,
                            orderQuantity:item.orderQuantity+1
                        }
                    }else{
                        return{
                            ...item
                        }
                    }
                })
            }
        }
        case RESETORDERCOUNT: {
            return {
                ...state,
                cart: state.cart.map(item=>{
                    if(item._id==action.payload){
                        return{
                            ...item,
                            orderQuantity:item.orderQuantity-1
                        }
                    }else{
                        return{
                            ...item
                        }
                    }
                })
            }
        }
        case GETCART: {
            return {
                ...state,
                cart: action.payload.map(item=>{
                    var valid=false;
                    var i=false;
                    state.cart.map(ite=>{
                        if(ite._id!=item._id)
                        {
                            valid= true
                            i = ite
                        }
                    })
                    if(!valid)
                        {
                             return {
                            ...item,
                            orderQuantity:1,
                            }
                        }
                            else{
                            return {...item,orderQuantity:i.orderQuantity}
                            }
                                })
                            }
                        }
        default:
            return state

    }
}
export default reducer;