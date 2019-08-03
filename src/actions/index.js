import axios from 'axios';
import types from './types';

export const getSchedule = () => async dispatch => {
try {

    console.log("ACTION CALLED");
    dispatch({
        type:types.GET_SCHEDULE_FETCHING
    });

    const response = await axios.get('/data/schedule.json');
    console.log("RESPONSE FROM THE SERVER",response);
    
    dispatch({
        type:types.GET_SCHEDULE_RESOLVE,
        payload:response.data.schedule
    });
    
    
}  

  catch(error)
  {
      console.log("Error in the getschedule");
      dispatch({
          type:types.GET_SCHEDULE_REJECT,
          payload:error
      })
  } 
}

export const getAllProducts = () => async dispatch => {
    try{
        const BASE_URL= 'http://api.sc.lfzprototypes.com';
        const response = await axios.get(BASE_URL + '/api/products'); 
        console.log("RESPONSE from products API:",response);
                           
        dispatch({
            type:types.GET_ALL_PRODUCTS,
            products:response.data.products
        });    
        
    }
    catch(error)
    {
        console.log("Error in getting products",error);
    }
} 

export const getProductDetails = (productID) => async dispatch => {
    try{
        const BASE_URL= 'http://api.sc.lfzprototypes.com';
        const response = await axios.get(`${BASE_URL}/api/products/${productID}`); 
        console.log("The response from the details server:",response);
        dispatch({
            type:types.GET_PRODUCT_DETAILS,
            product:response.data
        });    
        
    }
    catch(error)
    {
        console.log("Error in getting the product details", error);
    }
}

export const clearProductDetails = () => 
({        
  type:types.CLEAR_PRODUCT_DETAILS
      
})

export const addItemToCart = ( quantity, productId) => async dispatch =>
{
    try{
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }
        
        const BASE_URL= 'http://api.sc.lfzprototypes.com';
        const response = await axios.post(`${BASE_URL}/api/cart/items/${productId}`, {
            quantity:quantity
        }, axiosConfig); 
        
        localStorage.setItem('sc-cart-token', response.data.cartToken);
        dispatch({
            type:types.ADD_ITEM_TO_CART,
            cartTotal: response.data.total
        });

    }    
    catch (err)
        {
            console.log("Something went wrong,",err);
        }    
}

export const getActiveCart = () => async dispatch =>
{
    try{
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-cart-token':cartToken
            }
        };
        const BASE_URL= 'http://api.sc.lfzprototypes.com';
        const response = await axios.get(`${BASE_URL}/api/cart`, axiosConfig); 
        console.log("RESPONE FROM ACTIE CART", response);

        dispatch({
            type:types.GET_ACTIVE_CART,
            cart:response.data
        })
    }
    catch {
        console.log("Inside active cart catch block");
    }
}

export const getCartTotals = () => async dispatch => {
    try {
        console.log("CART TOTALL CALEED");
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-cart-token':cartToken
            }
        };
        const BASE_URL= 'http://api.sc.lfzprototypes.com';
        const response = await axios.get(`${BASE_URL}/api/cart/totals`, axiosConfig);  
        dispatch({
            type: types.GET_CART_TOTALS,
            total: response.data.total
        });
    }

    catch(err){
        console.log("error");
    }

}