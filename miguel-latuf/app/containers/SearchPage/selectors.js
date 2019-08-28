/**
 * SearchPage selectors
 */

import { createSelector } from 'reselect';

const selectSearch = (state) => state.get('search');

const makeSelectTrendsId = () => createSelector(
  selectSearch,
  (searchState) => searchState.get('trendsId')
);

const makeSelectTrends = () => createSelector(
  selectSearch,
  (searchState) => searchState.getIn('trends')
);

export {
  selectSearch,
  makeSelectTrendsId,
  makeSelectTrends
};