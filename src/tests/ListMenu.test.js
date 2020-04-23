import React from 'react';
import renderer from 'react-test-renderer';
import ListMenu from '../components/ListMenu';

test('renders correctly ListMenu', () => {
  const tree = renderer.create(<ListMenu />).toJSON();
  expect(tree).toMatchSnapshot();
});
