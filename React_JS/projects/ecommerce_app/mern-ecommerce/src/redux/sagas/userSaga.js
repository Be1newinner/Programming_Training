import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
} from "../actions/userActions";

const baseURL = process.env.REACT_APP_BASEURL;

function* loginUser({ payload }) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = yield call(
      axios.post,
      `${baseURL ? baseURL : ""}/api/users/login`,
      { email: payload.email, password: payload.password },
      config
    );

    yield put({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    yield put({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

function* registerUser({ payload }) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = yield call(
      axios.post,
      `${baseURL ? baseURL : ""}/api/users/register`,
      { name: payload.name, email: payload.email, password: payload.password },
      config
    );

    yield put({ type: USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));

    yield put({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

function* getUserDetails() {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    };

    const { data } = yield call(
      axios.get,
      `${baseURL ? baseURL : ""}/api/users/profile`,
      config
    );

    yield put({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

function* updateUserProfile({ payload }) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    };

    const { data } = yield call(
      axios.put,
      `${baseURL ? baseURL : ""}/api/users/profile`,
      payload,
      config
    );

    yield put({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
    yield put({ type: USER_DETAILS_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    yield put({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export default function* userSaga() {
  yield takeLatest(USER_REGISTER_REQUEST, registerUser);
  yield takeLatest(USER_LOGIN_REQUEST, loginUser);
  yield takeLatest(USER_DETAILS_REQUEST, getUserDetails);
  yield takeLatest(USER_UPDATE_PROFILE_REQUEST, updateUserProfile);
}
