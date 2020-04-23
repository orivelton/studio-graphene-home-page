import React from 'react';
import renderer from 'react-test-renderer';
import CurrentSection from '../components/CurrentSection';

test('renders correctly CurrentSection', () => {
  const tree = renderer.create(<CurrentSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
