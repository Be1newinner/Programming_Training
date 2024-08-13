import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchCounterBRequest,
  fetchCounterBSuccess,
  fetchCounterBFailure,
} from "../actions/counterBActions";
import { fetchCounterBFromApi } from "@/apis/fakeApi";

function* fetchCounterB() {
  try {
    const response = yield call(fetchCounterBFromApi);
    yield put(fetchCounterBSuccess(response.value));
  } catch (error) {
    yield put(fetchCounterBFailure(error.message));
  }
}

export default function* watchFetchCounterB() {
  yield takeEvery("FETCH_COUNTER_B_REQUEST", fetchCounterB);
}
