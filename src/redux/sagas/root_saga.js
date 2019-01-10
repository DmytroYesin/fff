import { all } from 'redux-saga/effects';
import registerUserSaga from './register_user.saga';
import loginUserSaga from './login_user.saga';
import logoutUserSaga from './logout_user.saga';

export default function* rootSaga() {
  yield all([
    registerUserSaga(),
    loginUserSaga(),
    logoutUserSaga()
  ])
}