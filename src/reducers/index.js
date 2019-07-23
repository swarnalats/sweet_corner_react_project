import { combineReducers} from 'redux';
import { reducer as formReducer} from 'redux-form';
import scheduleReducer from '../reducers/schdule_reducer' ;
import productReducer from '../reducers/product_reducer';

const rootReducer = combineReducers (
    {
        form:formReducer,
        schedule:scheduleReducer,
        product:productReducer

    }
);

export default rootReducer; 
 

