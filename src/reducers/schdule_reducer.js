import types from '../actions/types';

const DEFAULT_STATE = {
    list:[],
    isFetching:false
}

export default (state = DEFAULT_STATE, action) => {

    console.log("INSIDE SCHEDULE REDUCER", action.payload);
    switch(action.type)
    {
        case types.GET_SCHEDULE_FETCHING : {
            return {
                ...state, 
                isFetching:true
            }
        };

        case types.GET_SCHEDULE_RESOLVE: {
            return {
                ...state,
                isFetching:false,
                list:[
                    ...action.payload]
            }
        }
        default: 
            return state;

    }
    console.log("Done with resolve");
}