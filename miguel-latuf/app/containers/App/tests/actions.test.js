/* eslint-disable no-undef */
import {
    LOAD_TWEETS,
    LOAD_TWEETS_SUCCESS,
    LOAD_TWEETS_ERROR,
} from '../constants';

import {
    loadTweets,
    tweetsLoaded,
    tweetLoadingError,
} from '../actions';

import { mockTimeline } from '../../../utils/mocks/toTests/timeline';

describe('App Actions', () => {

    test('should return the correct type', () => {
        const expectedResult = {
            type: LOAD_TWEETS,
        };

        expect(loadTweets()).toEqual(expectedResult);
    });

    test('should return the correct type and the passed tweets', () => {
        const expectedResult = {
            type: LOAD_TWEETS_SUCCESS,
            tweets: mockTimeline
        };

        expect(tweetsLoaded(mockTimeline)).toEqual(expectedResult);
    });

    test('should return the correct type and the error', () => {
        const expectedResult = {
            type: LOAD_TWEETS_ERROR,
            error: true,
        };

        expect(tweetLoadingError(true)).toEqual(expectedResult);
    });
});
