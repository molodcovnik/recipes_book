import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";

import { logging } from "./redux/middleware/logging";


const store = createStore(rootReducer, applyMiddleware(logging));

export default store;