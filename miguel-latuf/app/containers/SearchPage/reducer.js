/*
 * SearchReducer
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
  LOAD_TRENDS,
  LOAD_TRENDS_ERROR,
  LOAD_TRENDS_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  trendsId: 23424747,
  trends: false
});

function searchReducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_TRENDS:
      return state
      .set('loading', true)
      .set('error', false)
      .setIn('trends', false);
    case LOAD_TRENDS_SUCCESS:
      return state
        .setIn('trends', action.trends)
        .set('loading', false);
    case LOAD_TRENDS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);  

    default:
      return state;
  }
}

export default searchReducer;