import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../sections/Footer';

test('renders correctly Footer', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
