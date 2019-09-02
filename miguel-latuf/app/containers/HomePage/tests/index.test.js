/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Timeline from 'app/components/Timeline';
import HomePage from 'app/containers/HomePage';
import { mapDispatchToProps } from 'app/containers/index';
import { changeTweetsCount } from 'app/containers/HomePage/actions'
import { loadTweets } from 'app/containers/App/actions';

describe('<HomePage />', () => {
  it('should render the timeline tweets', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} tweets={[]} />
    );
    expect(
      renderedComponent.contains(<Timeline loading error={false} tweets={[]} />)
    ).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeTweetsCount', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeTweetsCount).toBeDefined();
      });

      it('should dispatch changeTweetsCount when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const count = 16;
        result.onChangeTweetsCount({ target: { value: count } });
        expect(dispatch).toHaveBeenCalledWith(onChangeTweetsCount(count));
      });
    });

    describe('getTweets', () => {
      it('should dispatch loadTweets when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.getTweets();
        expect(dispatch).toHaveBeenCalledWith(loadTweets());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.getTweets(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
