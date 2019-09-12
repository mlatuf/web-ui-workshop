/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
    it('render the loader correctly', () => {
        const shallow = createShallow({ dive: true });
        const wrapper = shallow(<LoadingIndicator />);
        expect(wrapper).toBeDefined();
        expect(wrapper).toMatchSnapshot();
    });
});
