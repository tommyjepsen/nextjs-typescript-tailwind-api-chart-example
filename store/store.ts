import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/root.reducer";
import { API } from "./actions/api";
import { Store } from "./types";

const initialState: Store = {};
const middleware = [thunk.withExtraArgument(API)];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
