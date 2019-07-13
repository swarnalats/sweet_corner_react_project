import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension' ;
import thunkMiddleWare from './middleware/thunk';



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleWare)));

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router>
    </Provider>,
    document.getElementById('root')
);