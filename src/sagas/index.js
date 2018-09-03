import { takeLatest, call, put, take, takeEvery, select } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  // const action = yield take('API_CALL_SEARCH_REQUEST');
  yield takeLatest("SEARCH_API_CALL_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchUserProfile(search_value) {
  return axios({
    method: "get",
    url: "https://api.github.com/users/" + search_value
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const response = yield call(fetchUserProfile, action.value);
    const user_details = response.data;

    // dispatch a success action to the store with the new user_details
    yield put({ type: "SEARCH_API_CALL_SUCCESS", user_details });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "SEARCH_API_CALL_FAILURE", error });
    // const state = yield select();
    // debugger;
  }
}
