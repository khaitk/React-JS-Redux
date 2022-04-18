import { combineReducers } from "redux";
import addDataReducer from "./addDataReducer";

const rootReducer = combineReducers({
    formAdd : addDataReducer
})

export default rootReducer