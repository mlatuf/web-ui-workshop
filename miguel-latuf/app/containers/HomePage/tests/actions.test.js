import { CHANGE_TWEETSCOUNT } from 'app/containers/HomePage/constants';

import { changeTweetsCount } from 'app/containers/HomePage/actions';

describe('Home Actions', () => {
  describe('changeTweetsCount', () => {
    it('should return the correct type and the passed count', () => {
      const tweetsCount = 16;
      const expectedResult = {
        type: CHANGE_TWEETSCOUNT,
        count: tweetsCount
      };

      expect(changeTweetsCount(tweetsCount)).toEqual(expectedResult);
    });
  });
});
