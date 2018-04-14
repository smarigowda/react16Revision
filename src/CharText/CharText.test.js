import React from 'react';
import { shallow, mount } from 'enzyme';
import CharText from './CharText';

it('should display the character', () => {
  const actual = shallow(<CharText char='S'/>).text(); //?
  expect(actual).toBe('S');
})
