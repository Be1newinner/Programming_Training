import { all } from "redux-saga/effects";
import watchUserSagas from "./userSaga";
import watchProductSagas from "./productSaga";
import watchOrderSagas from "./orderSagas";

function* rootSaga() {
  yield all([
    watchUserSagas(),
    watchProductSagas(),
    // watchCartSagas(),
    watchOrderSagas(),
  ]);
}

export default rootSaga;
