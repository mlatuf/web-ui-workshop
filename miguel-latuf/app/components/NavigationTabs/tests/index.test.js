import React from 'react';
import TestRenderer from 'react-test-renderer';
import NavigationTabs from '../NavigationTabs';

describe('<NavigationTabs />', () => {
  it('render the navigation tabs correctly', () => {
    const wrapper = TestRenderer.create(<NavigationTabs />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
