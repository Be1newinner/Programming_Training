import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_PRODUCT_REQUEST } from "../constants/productConstants";
import { fetchProductAPI } from "@/apis/productApi";
import { fetchProductFailure, fetchProductSuccess } from "../actions/productActions"


function* FetchProuctSaga() {
    try {

        const response = yield call(fetchProductAPI, 2, 3);

        if (response?.products) {
            yield put(fetchProductSuccess(response?.products))
        } else {
            throw ("INVALID API DATA!")
        }

    } catch (e) {
        yield put(fetchProductFailure(e))
    }
}


export function* ProductSagaWatcher() {
    yield takeLatest(FETCH_PRODUCT_REQUEST, FetchProuctSaga);
}