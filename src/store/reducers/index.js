import { todosreducer } from "./todos";
import { appReducer } from "./app";
import { combineReducers } from "redux";

// combining two reducers
export const reducer = combineReducers({
  todos: todosreducer,
  app: appReducer
});
