import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import productSaga from "./productSaga";

function* rootSaga() {
  yield all([userSaga(), productSaga()]);
}

export default rootSaga;
