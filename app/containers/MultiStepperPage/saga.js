/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { GET_CONFIG } from './constants';
import { getConfigError, getConfigSuccess } from './actions';

/**
 * Data Config request/response handler
 */
export function* getConfig() {
  const requestURL = 'http://www.mocky.io/v2/5bf8fe0b3100007f0000d47e';

  try {
    // Call our request helper (see 'utils/request')
    const config = yield call(request, requestURL);
    yield put(getConfigSuccess(config));
  } catch (err) {
    yield put(getConfigError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* configData() {
  // Watches for LOAD_CONFIG actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_CONFIG, getConfig);
}
