import React from 'react';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import TrendingTweets from '../TrendingTweets';
import { mockTrends } from 'utils/mocks/timeline';


describe('<TrendingTweets />', () => {
  
  test('should render the loading indicator when its loading', () => {
    const shallow = createShallow({ dive: true });
    const wrapper = shallow(<TrendingTweets loading={true} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render an error if loading failed', () => {
    const mount = createMount();
    const wrapper = mount(
      <TrendingTweets loading={false} error={true} trends={false} />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render the tweets TrendingTweets if loading was successful', () => {
    const mount = createMount();
    const wrapper = mount(
      <TrendingTweets loading={false} trends={mockTrends.trends} error={false} />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

});
