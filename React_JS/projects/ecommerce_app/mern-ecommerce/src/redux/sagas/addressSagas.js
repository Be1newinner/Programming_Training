import { takeLatest, call, put } from "redux-saga/effects";
import {
  ADDRESS_LIST_USER_REQUEST,
  ADDRESS_LIST_USER_SUCCESS,
  ADDRESS_LIST_USER_FAIL,
  ADDRESS_ADD_REQUEST,
  ADDRESS_ADD_SUCCESS,
  ADDRESS_ADD_FAIL,
  ADDRESS_DELETE_REQUEST,
  ADDRESS_DELETE_SUCCESS,
  ADDRESS_DELETE_FAIL,
} from "../actions/addressActions";

import axios from "axios";

function* listUserAddresses() {
  try {
    const { data } = yield call([axios, "get"], "/api/addresses", {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    yield put({ type: ADDRESS_LIST_USER_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: ADDRESS_LIST_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

function* addUserAddress({ payload }) {
  try {
    yield call([axios, "post"], "/api/addresses", payload, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    yield put({ type: ADDRESS_ADD_SUCCESS });
    yield put({ type: ADDRESS_LIST_USER_REQUEST });
  } catch (error) {
    yield put({
      type: ADDRESS_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

function* deleteUserAddress({ payload }) {
  try {
    yield call([axios, "delete"], `/api/addresses/${payload}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    yield put({ type: ADDRESS_DELETE_SUCCESS });
    yield put({ type: ADDRESS_LIST_USER_REQUEST });
  } catch (error) {
    yield put({
      type: ADDRESS_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* addressSagas() {
  yield takeLatest(ADDRESS_LIST_USER_REQUEST, listUserAddresses);
  yield takeLatest(ADDRESS_ADD_REQUEST, addUserAddress);
  yield takeLatest(ADDRESS_DELETE_REQUEST, deleteUserAddress);
}
