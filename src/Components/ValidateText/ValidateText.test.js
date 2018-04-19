
import React from 'react';
import ValidateText from './ValidateText';
import { shallow, mount } from 'enzyme';

it('should display a message when text length is short', () => {
  const wrapper = shallow(<ValidateText text="Santosh"/>);
  const actual = wrapper.find('div p').text(); //?
  expect(actual).toEqual('You entered: Santosh');
});

it('should display a message when text length is short', () => {
  const wrapper = shallow(<ValidateText text="Santosh Arak"/>);
  const actual = wrapper.find('div p').text(); //?
  expect(actual).toEqual('Text is too long');
});

it('should display a message when text length is short', () => {
  const wrapper = shallow(<ValidateText text="San"/>);
  const actual = wrapper.find('div p').text(); //?
  expect(actual).toEqual('Text is too short');
});
