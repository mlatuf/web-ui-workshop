/**
 * TweetDetails selectors
 */

import { createSelector } from 'reselect';

const selectTweetDetails = (state) => state.get('tweetdetails');

const makeSelectTweetId = () => createSelector(
    selectTweetDetails,
    (tweetdetailsState) => tweetdetailsState.get('tweetId')
);

const makeSelectTweetDetails = () => createSelector(
    selectTweetDetails,
    (tweetdetailsState) => tweetdetailsState.getIn('tweetData')
);

export {
    selectTweetDetails,
    makeSelectTweetDetails,
    makeSelectTweetId
};