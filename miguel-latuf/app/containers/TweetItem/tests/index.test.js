/**
 * Test the tweet item
 */

import React from 'react';
import { shallow, render } from 'enzyme';

import TweetItem from '../TweetItem';
import { ListItem } from '@material-ui/core';

const renderComponent = (props = {}) => render(<TweetItem {...props} />);

describe.only('<TweetItem />', () => {
    let item;

    // Before each test reset the item data for safety
    beforeEach(() => {
        item = {
            owner: {
                login: 'flexdinesh'
            },
            html_url: 'https://github.com/flexdinesh/react-redux-boilerplate',
            name: 'react-redux-boilerplate',
            open_issues_count: 20,
            full_name: 'flexdinesh/react-redux-boilerplate'
        };
    });

    it('should render a ListItem', () => {
        const renderedComponent = shallow(<TweetItem item={item} />);
        expect(renderedComponent.find(ListItem).length).toBe(1);
    });


    it('should render the user name', () => {
        const renderedComponent = renderComponent({ item });
        expect(renderedComponent.text()).toContain(item.user.name);
    });

});
