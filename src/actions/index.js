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