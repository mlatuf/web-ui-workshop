/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, select, takeLatest
} from 'redux-saga/effects';

import { detailsLoaded, detailsLoadingError } from './actions';

import request from 'utils/request';
import { makeSelectTweetId } from 'containers/TweetDetailsPage/selectors';
import { LOAD_DETAILS } from './constants';

export function* getTweetDetails() {
  const tweetId = yield select(makeSelectTweetId());
  const requestURL = `http://localhost:8080/show?id=${tweetId}`;
  try {
    const details = yield call(request, requestURL);
    yield put(detailsLoaded(details));
  } catch (err) {
    yield put (detailsLoadingError(err));
  }
}


export default function* tweetDetails() {
  // Watches for LOAD_DETAILS actions and calls getTweetDetails when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_DETAILS, getTweetDetails);
}