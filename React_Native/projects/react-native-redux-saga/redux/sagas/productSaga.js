import { call, takeLatest } from "redux-saga/effects";
import { FETCH_PRODUCT_REQUEST } from "../constants/productConstants";
import { fetchProductAPI } from "@/apis/productApi";



function* FetchProuctSaga() {
    const response = yield call(fetchProductAPI)
}


export function* ProductSagaWatcher() {
    yield takeLatest(FETCH_PRODUCT_REQUEST, FetchProuctSaga);
}