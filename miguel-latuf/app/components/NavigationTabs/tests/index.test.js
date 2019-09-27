/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import NavigationTabs from '../NavigationTabs';

describe('<NavigationTabs />', () => {
    it('render the navigation tabs correctly', () => {
        const shallow = createShallow();
        const wrapper = shallow(<NavigationTabs />);
        expect(wrapper).toBeDefined();
        expect(wrapper).toMatchSnapshot();
    });
});
