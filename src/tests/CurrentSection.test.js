import React from 'react';
import renderer from 'react-test-renderer';
import CurrentSection from '../components/CurrentSection';

test('renders correctly', () => {
  const tree = renderer.create(<CurrentSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
