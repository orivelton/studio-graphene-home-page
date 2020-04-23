import React from 'react';
import renderer from 'react-test-renderer';
import FormContact from '../components/FormContact';

test('renders correctly FormContact', () => {
  const tree = renderer.create(<FormContact />).toJSON();
  expect(tree).toMatchSnapshot();
});
