import { combineReducers } from "redux";
import { globalReducer } from "./global/globalReducer";

const RootReducer = combineReducers({
    globalReducer
});
export default RootReducer;