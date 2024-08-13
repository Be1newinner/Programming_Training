import { all } from "redux-saga/effects";
import counterASaga from "./sagas/counterASaga";
import counterBSaga from "./sagas/counterBSaga";

export default function* rootSaga() {
  yield all([counterASaga(), counterBSaga()]);
}
