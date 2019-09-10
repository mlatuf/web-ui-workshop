import React from 'react';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import Timeline from 'components/Timeline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import LoadingIndicator from 'components/LoadingIndicator';
import { mockTimeline } from 'utils/mocks/timeline';
import { LinearProgress, ListItemText } from '@material-ui/core';

describe('<Timeline />', () => {
  it('should render the loading indicator when its loading', () => {
    const mount = createMount();
    const wrapper = mount(
      <Timeline loading={true} error={false} tweets={[]}/>
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(LinearProgress));
  });


  test('should render an error if loading failed', () => {
    const mount = createMount();
    const wrapper = mount(
      <Timeline loading={false} error={true} tweets={[]} />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(ListItemText).text()).toEqual('Something went wrong, please try again');
  });

  test.skip('should render the tweets Timeline if loading was successful', () => {
    const mount = createMount();
    const wrapper = mount(
      <Timeline loading={false} tweets={mockTimeline} error={false} />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

});
