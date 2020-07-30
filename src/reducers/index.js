import {combineReducers} from "redux";
import coinReducer from "./coin";
import loadingReducer from "./loading";

export default combineReducers({
    coinReducer,
    loadingReducer
})