import React from 'react';
import renderer from 'react-test-renderer';
import Stamp from '../components/Stamp';

test('renders correctly Stamp', () => {
  const tree = renderer.create(<Stamp />).toJSON();
  expect(tree).toMatchSnapshot();
});
