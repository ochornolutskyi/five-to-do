import { combineReducers } from "redux";
import todos_1_reducer from "./reducers/todos_1_reducer";

// add combine reducers for many todos
const rootReducer = combineReducers({
   todos_1: todos_1_reducer,
});

export default rootReducer;
