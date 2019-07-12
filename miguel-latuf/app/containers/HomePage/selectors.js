/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

const makeSelectTweetsCount = () => createSelector(
  selectHome,
  (homeState) => homeState.get('tweetsCount')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectTweetsCount
};
