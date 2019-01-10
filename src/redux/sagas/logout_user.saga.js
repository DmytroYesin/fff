import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGOUT_USER_REQUEST } from "../constants/logout_user.constants";
import { logoutUser } from "../../api/account_requests";
import { logoutUserRequestSuccess, logoutUserRequestFailure } from "../actions/logout_user.actions";
import { message_success, message_error } from "../../common/messages";
import { history } from "../../common/history";

function* logoutUserRequest() {
  const logoutUserParams = yield call(logoutUser),
       { success, message } = logoutUserParams;
  if(success) {
    yield put(logoutUserRequestSuccess());
    sessionStorage.removeItem('token');
    message_success(message);
    history.push('/login');
  } else {
    yield put(logoutUserRequestFailure(message));
    message_error(message);
  }
}

export default function* logoutUserSaga() {
  yield takeEvery(LOGOUT_USER_REQUEST, logoutUserRequest);
}