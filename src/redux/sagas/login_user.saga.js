import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_USER_REQUEST } from "../constants/login_user.constants";
import { loginUser } from "../../api/account_requests";
import { loginUserRequestSuccess, loginUserRequestFailure } from "../actions/login_user.actions";
import { message_success, message_error } from "../../common/messages";
import { history } from "../../common/history";

function* loginUserRequest(email, password) {
  const loginUserParams = yield call(loginUser, email, password),
       { success, message, token } = loginUserParams;
  console.log(loginUserParams)
  if(success) {
    yield put(loginUserRequestSuccess());
    sessionStorage.setItem('token', token);
    message_success(message);
    history.push('/');
  } else {
    yield put(loginUserRequestFailure(message));
    message_error(message);
  }
}

export default function* loginUserSaga() {
  yield takeEvery(LOGIN_USER_REQUEST, loginUserRequest);
}