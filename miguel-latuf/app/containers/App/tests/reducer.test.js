import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
    loadTweets,
    tweetsLoaded,
    tweetLoadingError,
} from '../actions';
import { mockTimeline } from '../../../utils/mocks/toTests/timeline';

describe('appReducer', () => {
    let state;
    beforeEach(() => {
        state = fromJS({
            loading: false,
            error: false,
            tweets: false
        });
    });

    it('should return the initial state', () => {
        const expectedResult = state;
        expect(appReducer(undefined, {})).toEqual(expectedResult);
    });

    it('should handle the loadTweets action correctly', () => {
        const expectedResult = state
            .set('loading', true)
            .set('error', false)
            .setIn('tweets', false);

        expect(appReducer(state, loadTweets())).toEqual(expectedResult);
    });

    it('should handle the tweetsLoaded action correctly', () => {
        const tweets = mockTimeline;
        const expectedResult = state
            .setIn('tweets', tweets)
            .set('loading', false);

        expect(appReducer(state, tweetsLoaded(tweets))).toEqual(expectedResult);
    });

    it('should handle the tweetLoadingError action correctly', () => {
        const expectedResult = state
            .set('error', true)
            .set('loading', false);

        expect(appReducer(state, tweetLoadingError(true))).toEqual(expectedResult);
    });
});
