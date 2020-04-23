import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../components/Logo';

test('renders correctly Logo', () => {
  const tree = renderer.create(<Logo />).toJSON();
  expect(tree).toMatchSnapshot();
});
