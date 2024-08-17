import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchCounterARequest,
  fetchCounterASuccess,
  fetchCounterAFailure,
} from "../actions/counterAActions";
import { fetchCounterAFromApi } from "@/apis/fakeApi";

function* fetchCounterA(arg, arg2) {
  try {
    const response = yield call(fetchCounterAFromApi, arg, arg2);
    yield put(fetchCounterASuccess(response.value));
  } catch (error) {
    yield put(fetchCounterAFailure(error.message));
  }
}

export default function* watchFetchCounterA() {
  yield takeEvery("FETCH_COUNTER_A_REQUEST", fetchCounterA);
}
