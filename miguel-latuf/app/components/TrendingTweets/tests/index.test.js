/* eslint-disable no-undef */
import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import TrendingTweets from '../TrendingTweets';
import { Provider } from 'react-redux';
import { mockTrends } from 'utils/mocks/toTests/timeline';
import { LinearProgress, ListItemText, ListItem } from '@material-ui/core';
import configureStore from '../../../configureStore';
import toJson from 'enzyme-to-json';


describe('<TrendingTweets />', () => {
  
    test('should render the loading indicator when its loading', () => {
        const mount = createMount();
        const wrapper = mount(
            <TrendingTweets loading={true} error={false} trends={false}/>
        );
        expect(wrapper).toBeDefined();
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(LinearProgress));
    });

    test('should render an error if loading failed', () => {
        const mount = createMount();
        const wrapper = mount(
            <TrendingTweets loading={false} error={true} trends={[]} />
        );
        expect(wrapper).toBeDefined();
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(ListItemText).text()).toEqual('Something went wrong, please try again!');
    });

    test.skip('should render the tweets TrendingTweets if loading was successful', () => {
        const mount = createMount();
        const store = configureStore({},{});
        const wrapper = mount(
            <Provider store={store}>
                <TrendingTweets loading={false} trends={mockTrends.trends} error={false} />
            </Provider>
        );
        expect(toJson(wrapper)).toBeDefined();
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(ListItem).length).toEqual(mockTrends.trends.length); 
    });

});
