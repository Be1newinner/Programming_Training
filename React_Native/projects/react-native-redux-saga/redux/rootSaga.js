import { all } from "redux-saga/effects";
import counterASaga from "./sagas/counterASaga";
import counterBSaga from "./sagas/counterBSaga";
import ProductSagaWatcher from "./sagas/productSaga";

export default function* rootSaga() {
  yield all([counterASaga(), counterBSaga(), ProductSagaWatcher()]);
}
