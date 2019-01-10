import { LOGIN_USER_REQUEST, LOGIN_USER_REQUEST_SUCCESS, LOGIN_USER_REQUEST_FAILURE } from "../constants/login_user.constants";
import { LOGOUT_USER_REQUEST, LOGOUT_USER_REQUEST_SUCCESS, LOGOUT_USER_REQUEST_FAILURE } from "../constants/logout_user.constants";

const initialState = {
  loading: false,
  hasLogin: !!sessionStorage.getItem('token'),
  isDeleted: false,
  error: null
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        hasLogin: false,
        loading: true
      };
    case LOGIN_USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        hasLogin: true,
      };
    case LOGIN_USER_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        hasLogin: false,
        error: action.error
      };
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        loading: true,
        hasLogin: false
      };
    case LOGOUT_USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        hasLogin: false,
      };
    case LOGOUT_USER_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};