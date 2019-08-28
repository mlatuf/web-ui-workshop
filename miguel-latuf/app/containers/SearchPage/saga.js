/**
 * Gets the trending tweets for the SearchPage
 * Gets the search results tweets on the SearchPage
 */
import {
  call, put, select, takeLatest
} from 'redux-saga/effects';
import { LOAD_TRENDS } from './constants';
import { trendsLoadingError, trendsLoaded } from './actions';
import { mockTrends } from 'utils/mocks/timeline.js';


import request from 'utils/request';
import { makeSelectTrendsId } from './selectors';

export function* getTrends() {
  const trendsId = yield select(makeSelectTrendsId());
  const requestURL = `http://localhost:8080/trends?id=${trendsId}`;
  try {
    const trendsData = ( process.env.MOCK ) ? mockTrends : yield call(request, requestURL);
    yield put(trendsLoaded(trendsData[0].trends));
  } catch (err) {
    yield put (trendsLoadingError(err));
  }
}


export default function* trendsData() {
  // Watches for LOAD_TRENDS actions and calls getTrends when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_TRENDS, getTrends);
}




