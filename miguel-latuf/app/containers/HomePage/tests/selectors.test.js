import { fromJS } from 'immutable';

import {
    selectHome,
    makeSelectTweetsCount,
} from 'app/containers/HomePage/selectors';

describe('selectHome', () => {
    it('should select the home state', () => {
        const homeState = fromJS({
            tweetsCount: 8,
        });
        const mockedState = fromJS({
            home: homeState,
        });
        expect(selectHome(mockedState)).toEqual(homeState);
    });
});

describe('makeSelectTweetsCount', () => {
    const tweetsCountSelector = makeSelectTweetsCount();
    it('should select the tweetsCount', () => {
        const count = 8;
        const mockedState = fromJS({
            home: {
                count,
            },
        });
        expect(tweetsCountSelector(mockedState)).toEqual(count);
    });
});
