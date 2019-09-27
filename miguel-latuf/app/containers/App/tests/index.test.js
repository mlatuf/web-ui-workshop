/* eslint-disable no-undef */
import React from 'react';
import { Route } from 'react-router-dom';
import { createShallow } from '@material-ui/core/test-utils';
import App from '../index';

describe('<App />', () => {

    it('should render some routes', () => {
        const shallow = createShallow();
        const wrapper = shallow(<App />);
        expect(wrapper).toBeDefined();
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(Route).length).not.toBe(0);
    });

});
