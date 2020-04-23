import React from 'react';
import renderer from 'react-test-renderer';
import OurMenu from '../sections/OurMenu';

test('renders correctly OurMenu', () => {
  const tree = renderer.create(<OurMenu />).toJSON();
  expect(tree).toMatchSnapshot();
});
