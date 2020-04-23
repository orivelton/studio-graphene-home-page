import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../sections/Home';

test('renders correctly Home', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
