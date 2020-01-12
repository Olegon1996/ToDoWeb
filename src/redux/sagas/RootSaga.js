import { take, takeEvery, call } from "redux-saga/effects";
import { logInAuthorization, logUpAuthorization, vereficateAuthorization } from "./AuthSagas";
import {LOGIN_REQUEST, LOGUP_REQUEST} from '../actions/actionsTypes';


export default function* watcherAuthSaga() {
  yield takeEvery(LOGIN_REQUEST, logInAuthorization);
  yield takeEvery(LOGUP_REQUEST, logUpAuthorization);
  yield takeEvery('VEREFICATE_REQUEST', vereficateAuthorization);
}
