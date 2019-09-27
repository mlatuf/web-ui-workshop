/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectLoading = () => createSelector(
    selectGlobal,
    (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
    selectGlobal,
    (globalState) => globalState.get('error')
);

const makeSelectLocation = () => createSelector(
    selectRoute,
    (routeState) => routeState.get('location').toJS()
);

const makeSelectTweets = () => createSelector(
    selectGlobal,
    (globalState) => globalState.getIn(['tweets'])
);

const makeSelectTweetCount = () => createSelector(
    selectGlobal,
    (globalState) => globalState.get('count')
);

export {
    selectGlobal,
    makeSelectLoading,
    makeSelectError,
    makeSelectLocation,
    makeSelectTweets,
    makeSelectTweetCount
};
