import { fromJS } from 'immutable';

import {
    selectGlobal,
    makeSelectLoading,
    makeSelectError,
    makeSelectTweets,
    makeSelectTweetCount,
    makeSelectLocation,
} from '../selectors';

describe('selectGlobal', () => {
    const errorSelector = makeSelectError();
    const loadingSelector = makeSelectLoading();
    const tweetsSelector = makeSelectTweets();
    const tweetCountSelector = makeSelectTweetCount();
    const locationStateSelector = makeSelectLocation();

    it('should select the global state', () => {
        const globalState = fromJS({});
        const mockedState = fromJS({
            global: globalState,
        });
        expect(selectGlobal(mockedState)).toEqual(globalState);
    });

    it('should select the loading', () => {
        const loading = false;
        const mockedState = fromJS({
            global: {
                loading,
            },
        });
        expect(loadingSelector(mockedState)).toEqual(loading);
    });

    it('should select the error', () => {
        const error = 404;
        const mockedState = fromJS({
            global: {
                error,
            },
        });
        expect(errorSelector(mockedState)).toEqual(error);
    });

    it('should select the tweets', () => {
        const tweets = fromJS([]);
        const mockedState = fromJS({
            global: {
                tweets
            },
        });
        expect(tweetsSelector(mockedState)).toEqual(tweets);
    });

    it('should select the tweets count', () => {
        const count = fromJS([]);
        const mockedState = fromJS({
            global: {
                count
            },
        });
        expect(tweetCountSelector(mockedState)).toEqual(count);
    });

    it('should select the location', () => {
        const route = fromJS({
            location: { pathname: '/foo' },
        });
        const mockedState = fromJS({
            route,
        });
        expect(locationStateSelector(mockedState)).toEqual(route.get('location').toJS());
    });

});