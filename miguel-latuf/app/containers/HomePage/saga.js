/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, select, takeLatest
} from 'redux-saga/effects';
import { LOAD_TWEETS } from 'containers/App/constants';
import { tweetLoadingError, tweetsLoaded } from 'containers/App/actions';
import { mockTimeline } from 'utils/mocks/timeline.js';


import request from 'utils/request';
import { makeSelectTweetsCount } from 'containers/HomePage/selectors';

export function* getTweets() {
  const count = yield select(makeSelectTweetsCount());
  const requestURL = `http://localhost:8080/timeline?count=200`;
  try {
    const tweets = ( process.env.MOCK ) ? mockTimeline : yield call(request, requestURL);
    yield put(tweetsLoaded(tweets));
  } catch (err) {
    yield put (tweetLoadingError(err));
  }
}


export default function* tweetsData() {
  // Watches for LOAD_TWEETS actions and calls getTweets when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_TWEETS, getTweets);
}



