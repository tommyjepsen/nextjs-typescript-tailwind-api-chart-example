import { combineReducers } from "redux";
import chartsReducer from "./charts.reducer";

const rootReducer = combineReducers({
    charts: chartsReducer,
});

export default rootReducer;
