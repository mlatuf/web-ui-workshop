import { fromJS } from 'immutable';

import homeReducer from 'app/containers/HomePage/reducer';
import { changeTweetsCount } from 'app/containers/HomePage/actions';

describe('homeReducer', () => {
    let state;
    beforeEach(() => {
        state = fromJS({
            tweetsCount: 8
        });
    });

    it('should return the initial state', () => {
        const expectedResult = state;
        expect(homeReducer(undefined, {})).toEqual(expectedResult);
    });

    it('should handle the changeTweetsCount action correctly', () => {
        const count = 16;
        const expectedResult = state.set('tweetsCount', count);

        expect(homeReducer(state, changeTweetsCount(count))).toEqual(expectedResult);
    });
});
