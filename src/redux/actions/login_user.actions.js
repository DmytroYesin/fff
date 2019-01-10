import { LOGIN_USER_REQUEST, LOGIN_USER_REQUEST_SUCCESS, LOGIN_USER_REQUEST_FAILURE } from "../constants/login_user.constants";

export const loginUserRequest = (email, password) => {
  return {
    type: LOGIN_USER_REQUEST,
    email, password
  }
};

export const loginUserRequestSuccess = () => {
  return {
    type: LOGIN_USER_REQUEST_SUCCESS
  }
};

export const loginUserRequestFailure = error => {
  return {
    type: LOGIN_USER_REQUEST_FAILURE,
    error
  }
};