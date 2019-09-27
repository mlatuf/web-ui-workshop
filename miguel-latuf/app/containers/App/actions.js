/*
 * App Actions
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
    LOAD_TWEETS_SUCCESS,
    LOAD_TWEETS,
    LOAD_TWEETS_ERROR,
} from './constants';

export function loadTweets() {
    return {
        type: LOAD_TWEETS,
    };
}

export function tweetsLoaded(tweets) {
    return {
        type: LOAD_TWEETS_SUCCESS,
        tweets
    };
}

export function tweetLoadingError(error) {
    return {
        type: LOAD_TWEETS_ERROR,
        error,
    };
}