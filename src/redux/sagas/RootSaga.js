import { takeEvery } from "redux-saga/effects";
import { logInAuthorization, logUpAuthorization, logOutAuthorization } from "./AuthSagas";
import {LOGIN_REQUEST, LOGUP_REQUEST, LOGOUT_REQUEST } from '../actions/actionsTypes';


export default function* watcherAuthSaga() {
  yield takeEvery(LOGIN_REQUEST, logInAuthorization);
  yield takeEvery(LOGUP_REQUEST, logUpAuthorization);
  yield takeEvery(LOGOUT_REQUEST, logOutAuthorization);
}
