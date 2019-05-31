/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, select, takeLatest
} from 'redux-saga/effects';
import { LOAD_REPOS, LOAD_TWEETS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError, tweetLoadingError, tweetsLoaded } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername, makeSelectTweetsCount } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getTweets() {
  const count = yield select(makeSelectTweetsCount());
  const requestURL = `http://localhost:8080/timeline?count=${count}`;
  try {
    const tweets = yield call(request, requestURL);
    yield put(tweetsLoaded(tweets));
  } catch (err) {
    yield put (tweetLoadingError(err));
  }
}
/**
 * Root saga manages watcher lifecycle
 */
// export default function* githubData() {
//   // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
//   // By using `takeLatest` only the result of the latest API call is applied.
//   // It returns task descriptor (just like fork) so we can continue execution
//   // It will be cancelled automatically on component unmount
//   yield takeLatest(LOAD_REPOS, getRepos);
// }
export default function* tweetsData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_TWEETS, getTweets);
}



