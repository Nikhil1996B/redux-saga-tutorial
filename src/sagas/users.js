import { takeEvery, call, fork } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api";

function* getUsers() {
  try {
    const result = yield call(api.users);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.types.GET_USERS_REQUEST, getUsers);
}

const userSagas = [fork(watchGetUsersRequest)];
export default userSagas;
