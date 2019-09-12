/*
 * TweetDetailsReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
    LOAD_DETAILS,
    LOAD_DETAILS_SUCCESS,
    LOAD_DETAILS_ERROR,
    CHANGE_TWEET_ID,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    loading: false,
    error: false,
    tweetData: false,
    tweetId: null
});

function tweetdetailsReducer(state = initialState, action) {
    switch (action.type) {

    case LOAD_DETAILS:
        return state
            .set('loading', true)
            .set('error', false)
            .setIn('tweetData', false);

    case LOAD_DETAILS_SUCCESS:
        return state
            .setIn('tweetData', action.details)
            .set('loading', false);

    case LOAD_DETAILS_ERROR:
        return state
            .set('error', action.error)
            .set('loading', false);  

    case CHANGE_TWEET_ID:
        return state.set('tweetId', action.tweetId);

    default:
        return state;
    }
}

export default tweetdetailsReducer;
