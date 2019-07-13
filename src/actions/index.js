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

    console.log("After resolve");

    return {
        type:types.GET_SCHEDULE
    }
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
