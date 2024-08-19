import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_LIST_USER_REQUEST,
  ORDER_LIST_USER_SUCCESS,
  ORDER_LIST_USER_FAIL,
} from "../actions/orderActions";

const baseURL = process.env.REACT_APP_BASEURL;

function* listUserOrders() {
  try {
    const { data } = yield call([axios, "get"], "/api/orders/myorders", {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    yield put({ type: ORDER_LIST_USER_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: ORDER_LIST_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

function* createOrderSaga(action) {
  try {
    const { data } = yield call(
      axios.post,
      `${baseURL ? baseURL : ""}/api/orders`,
      action.payload
    );
    yield put({ type: ORDER_CREATE_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

function* getOrderDetailsSaga(action) {
  try {
    const { data } = yield call(
      axios.get,
      `${baseURL ? baseURL : ""}/api/orders/${action.payload}`
    );
    yield put({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export default function* watchOrderSagas() {
  yield takeLatest(ORDER_CREATE_REQUEST, createOrderSaga);
  yield takeLatest(ORDER_DETAILS_REQUEST, getOrderDetailsSaga);
  yield takeLatest(ORDER_LIST_USER_REQUEST, listUserOrders);
}
