import { REGISTER_USER_REQUEST, REGISTER_USER_REQUEST_SUCCESS, REGISTER_USER_REQUEST_FAILURE } from "../constants/register_user.constants";

const initialState = {
  loading: false,
  hasRegistered: false,
  error: null
};

export const registration = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        hasRegistered: false,
        loading: true
      };
    case REGISTER_USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        hasRegistered: true
      };
    case REGISTER_USER_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        hasRegistered: false,
        error: action.error
      };
    default:
      return state;
  }
};