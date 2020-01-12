import { combineReducers } from "redux";

import AuthReducer from "./authReducer";
import ToDoReducer from "./toDoReducer";

export default combineReducers({
  AuthReducer,
  ToDoReducer
});
