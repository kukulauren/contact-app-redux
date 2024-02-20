import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./reducer/auth.reducer";

const reducer = combineReducers({
  auth: authReducer
});
export const store = createStore(reducer, {}, applyMiddleware(thunk));
