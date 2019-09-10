import React from 'react';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import Timeline from 'components/Timeline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import LoadingIndicator from 'components/LoadingIndicator';
import { mockTimeline } from 'utils/mocks/timeline';

describe('<Timeline />', () => {
  it('should render the loading indicator when its loading', () => {
    const theme = {
      progress: {
        flexGrow: 1
      },
      root: {
        width: '100%',
        padding: 0
      },
      text: {
        display: 'inline'
      },
      centeredText: {
        display: 'inline',
        textAlign: "center"
      }
    };
    // const shallow = createShallow({ dive: true });
    // const wrapper = shallow(<Timeline loading={true} error={false} tweets={[]}/>);
    const mount = createMount();
    const wrapper = mount(<Timeline loading={true} error={false} tweets={[]}/>);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
    // const wrapper = mount(
    //   <MuiThemeProvider theme={theme}>
    //     <Timeline loading={true} error={false} tweets={[]}/>
    //   </MuiThemeProvider>
    // );
    // expect(wrapper.contains(<LoadingIndicator />)).toBe(true);
  });


  test.skip('should render an error if loading failed', () => {
    const mount = createMount();
    const wrapper = mount(
      <Timeline loading={false} error={true} tweets={false} />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
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
