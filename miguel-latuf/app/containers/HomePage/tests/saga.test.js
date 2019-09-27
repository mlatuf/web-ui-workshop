/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_TWEETS } from 'containers/App/constants';
import { tweetsLoaded, tweetsLoadingError } from 'containers/App/actions';

import tweetsData, { getTweets } from 'app/containers/saga';

const count = 8;

/* eslint-disable redux-saga/yield-effects */
describe('getTweets Saga', () => {
    let getTweetsGenerator;

    // We have to test twice, once for a successful load and once for an unsuccessful one
    // so we do all the stuff that happens beforehand automatically in the beforeEach
    beforeEach(() => {
        getTweetsGenerator = getTweets();

        const selectDescriptor = getTweetsGenerator.next().value;
        expect(selectDescriptor).toMatchSnapshot();

        const callDescriptor = getTweetsGenerator.next(count).value;
        expect(callDescriptor).toMatchSnapshot();
    });

    it('should dispatch the tweetsLoaded action if it requests the data successfully', () => {
        const response = [{
            name: 'First repo',
        }, {
            name: 'Second repo',
        }];
        const putDescriptor = getTweetsGenerator.next(response).value;
        expect(putDescriptor).toEqual(put(tweetsLoaded(response)));
    });

    it('should call the tweetsLoadingError action if the response errors', () => {
        const response = new Error('Some error');
        const putDescriptor = getTweetsGenerator.throw(response).value;
        expect(putDescriptor).toEqual(put(tweetsLoadingError(response)));
    });
});

describe('tweetsDataSaga Saga', () => {
    const tweetsDataSaga = tweetsData();

    it('should start task to watch for LOAD_TWEETS action', () => {
        const takeLatestDescriptor = tweetsDataSaga.next().value;
        expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_TWEETS, getTweets));
    });
});
