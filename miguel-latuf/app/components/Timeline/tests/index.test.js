/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import Timeline from 'components/Timeline';
import TweetItem from 'containers/TweetItem';
import { Provider } from 'react-redux';
import { mockTimeline } from 'utils/mocks/toTests/timeline';
import { LinearProgress, ListItemText } from '@material-ui/core';
import configureStore from '../../../configureStore';
import toJson from 'enzyme-to-json';

describe('<Timeline />', () => {

    test('should render the loading indicator when its loading', () => {
        const mount = createMount();
        const wrapper = mount(
            <Timeline loading={true} error={false} tweets={[]} />
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
        expect(wrapper.find(ListItemText).text()).toEqual('Something went wrong, please try again!');
    });

    test('should render the tweets Timeline if loading was successful', () => {
        const mount = createMount();
        const store = configureStore({}, {});
        const wrapper = mount(
            <Provider store={store}>
                <Timeline loading={false} tweets={mockTimeline} error={false} />
            </Provider>
        );
        expect(toJson(wrapper)).toBeDefined();
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(TweetItem).length).toBeGreaterThanOrEqual(1);
    });

});
