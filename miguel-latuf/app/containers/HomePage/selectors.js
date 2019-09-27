/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectTweetsCount = () => createSelector(
    selectHome,
    (homeState) => homeState.get('tweetsCount')
);

export {
    selectHome,
    makeSelectTweetsCount
};
