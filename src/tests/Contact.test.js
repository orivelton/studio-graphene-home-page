import React from 'react';
import renderer from 'react-test-renderer';
import Contact from '../section/Contact';

test('renders correctly Contact', () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});
