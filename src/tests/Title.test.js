import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../components/Title';

test('renders correctly Title', () => {
  const tree = renderer.create(<Title />).toJSON();
  expect(tree).toMatchSnapshot();
});
