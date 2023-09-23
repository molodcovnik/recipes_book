import * as React from "react";
import {render} from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import store from "./store";
import { Provider } from 'react-redux';

import App from "./components/App";


console.log('Initial state: ', store.getState());

// const unsubscribe = store.subscribe(() =>
//   console.log('State after dispatch: ', store.getState())
// )

// store.dispatch({type: 'category/getCategory', payload: 'Fish'})

// unsubscribe()

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
