import { combineReducers } from 'redux';
import { registration } from "./register_user.reducer";
import { login } from "./login_user.reducer";

export const rootReducer = combineReducers({
  registration,
  login
});