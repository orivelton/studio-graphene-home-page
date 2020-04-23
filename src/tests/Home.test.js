import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../section/Home';

test('renders correctly Home', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
