import { shallow, mount } from 'enzyme';
import React from 'react';
import { List, LinearProgress } from '@material-ui/core';
import TrendingTweets from '../TrendingTweets';
import { mockTrends } from '../../app/utils/mocks/timeline';

describe('<TrendingTweets />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(<TrendingTweets loading />);
    expect(
      renderedComponent.contains(<List component={LinearProgress} />)
    ).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <TrendingTweets loading={false} error={{ message: 'Loading failed!' }} />
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the tweets TrendingTweets if loading was successful', () => {
    const trends = mockTrends.trends;
    const renderedComponent = shallow(
      <TrendingTweets trends={trends} error={false} />
    );

    expect(
      renderedComponent.contains(
        <ListItem key={trends[0].name}>
          <ListItemText>{trends[0].name}</ListItemText>
        </ListItem>
      )
    ).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <TrendingTweets trends={false} error={false} loading={false} />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
