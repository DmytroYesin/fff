import { call, put, takeEvery } from 'redux-saga/effects';
import { REGISTER_USER_REQUEST } from "../constants/register_user.constants";
import { registerUser } from "../../api/account_requests";
import { registerUserRequestSuccess, registerUserRequestFailure } from "../actions/register_user.actions";
import { history } from "../../common/history";
import { message_success, message_error } from "../../common/messages";

function* registerUserRequest(username, email, password) {
  const registerUserParams = yield call(registerUser, username, email, password),
        { success, message } = registerUserParams;
  if(success) {
    yield put(registerUserRequestSuccess());
    message_success(message);
    history.push('/login');
  } else {
    yield put(registerUserRequestFailure(message));
    message_error(message);
  }
}

export default function* registerUserSaga() {
  yield takeEvery(REGISTER_USER_REQUEST, registerUserRequest);
}