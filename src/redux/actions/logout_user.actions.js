import { LOGOUT_USER_REQUEST, LOGOUT_USER_REQUEST_SUCCESS, LOGOUT_USER_REQUEST_FAILURE } from "../constants/logout_user.constants";

export const logoutUserRequest = token => {
  return {
    type: LOGOUT_USER_REQUEST,
    token
  }
};

export const logoutUserRequestSuccess = () => {
  return {
    type: LOGOUT_USER_REQUEST_SUCCESS
  }
};

export const logoutUserRequestFailure = error => {
  return {
    type: LOGOUT_USER_REQUEST_FAILURE,
    error
  }
};