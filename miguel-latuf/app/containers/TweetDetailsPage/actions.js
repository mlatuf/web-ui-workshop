/*
 * Tweet details Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_DETAILS_SUCCESS,
  LOAD_DETAILS,
  LOAD_DETAILS_ERROR,
  CHANGE_TWEET_ID
} from './constants';

export function loadTweetDetails() {
  return {
    type: LOAD_DETAILS,
  };
}

export function detailsLoaded(details) {
  return {
    type: LOAD_DETAILS_SUCCESS,
    details
  }
}

export function detailsLoadingError(error) {
  return {
    type: LOAD_DETAILS_ERROR,
    error,
  };
}

export function changeTweetId(tweetId) {
  return {
    type: CHANGE_TWEET_ID,
    tweetId
  }
}