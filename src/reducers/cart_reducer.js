import types from '../actions/types';

const DEFAULT_STATE = {
    cartID:null,
    items:null,
    total:null
}

export default (state = DEFAULT_STATE, action ) =>
{
    switch(action.type) 
    {
        case types.ADD_ITEM_TO_CART: {
            console.log("Cart reducer action",action);
            return {
                ...state,
                total: action.cartTotal
            }
        }
        case types.GET_ACTIVE_CART:{
            return {
                ...state,
                cartID:action.cart.cartId,
                items:action.cart.items,
                total:action.cart.total
            }
        }      
        case types.GET_CART_TOTALS:{
            console.log("THIS IS THE TOTAL with action",action);
            return {
                ...state,
                total:action.total
            }    
        }
        default:
            return state;
    }
}