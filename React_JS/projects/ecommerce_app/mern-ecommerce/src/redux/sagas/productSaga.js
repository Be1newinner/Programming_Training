import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../actions/productActions";
const baseURL = process.env.REACT_APP_BASEURL;

function* fetchProducts() {
  try {
    const { data } = yield call(
      axios.get,
      `${baseURL ? baseURL : ""}/api/products`
    );
    yield put({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

function* fetchProductDetails({ payload }) {
  try {
    const { data } = yield call(
      axios.get,
      `${baseURL ? baseURL : ""}/api/products/${payload}`
    );
    yield put({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export default function* productSaga() {
  yield takeLatest(PRODUCT_LIST_REQUEST, fetchProducts);
  yield takeLatest(PRODUCT_DETAILS_REQUEST, fetchProductDetails);
}
