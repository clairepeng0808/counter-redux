import loginUser from "./userReducer";
import counter from "./counterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  loginUser,
  counter,
});

export default rootReducer;
