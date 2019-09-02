import React from 'react';
import TestRenderer from 'react-test-renderer';
import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
  it('render the loader correctly', () => {
    const wrapper = TestRenderer.create(<LoadingIndicator />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
