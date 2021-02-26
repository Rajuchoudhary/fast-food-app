import { spawn } from 'redux-saga/effects';
import AdminSagas from './adminSagas';
import AuthSagas from './authSagas';
import PublicSagas from './publicSagas';
import UserSagas from './userSagas';

export default function* rootSaga() {
  yield spawn(AuthSagas);
  yield spawn(AdminSagas);
  yield spawn(PublicSagas);
  yield spawn(UserSagas);
}
