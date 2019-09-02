import React from 'react';
import { shallow, mount } from 'enzyme';
import TweetItem from 'containers/TweetItem';
import { List, LinearProgress } from '@material-ui/core';
import Timeline from 'app/components/Timeline';
import { mockTimeline } from 'app/utils/mocks/timeline';

describe('<Timeline />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(<Timeline loading />);
    expect(
      renderedComponent.contains(<List component={LinearProgress} />)
    ).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <Timeline loading={false} error={{ message: 'Loading failed!' }} />
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the tweets timeline if loading was successful', () => {
    const tweets = mockTimeline;
    const renderedComponent = shallow(
      <Timeline tweets={tweets} error={false} />
    );

    expect(
      renderedComponent.contains(
        <List items={tweets} component={TweetItem} />
      )
    ).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <Timeline tweets={false} error={false} loading={false} />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
