import { REGISTER_USER_REQUEST, REGISTER_USER_REQUEST_SUCCESS, REGISTER_USER_REQUEST_FAILURE } from "../constants/register_user.constants";

export const registerUserRequest = (username, email, password) => {
  return {
    type: REGISTER_USER_REQUEST,
    username, email, password
  }
};

export const registerUserRequestSuccess = () => {
  return {
    type: REGISTER_USER_REQUEST_SUCCESS
  }
};

export const registerUserRequestFailure = error => {
  return {
    type: REGISTER_USER_REQUEST_FAILURE,
    error
  }
};