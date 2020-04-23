import React from 'react';
import renderer from 'react-test-renderer';
import Contact from '../sections/Contact';

test('renders correctly Contact', () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});
