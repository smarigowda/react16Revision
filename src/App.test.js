import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('App component should have a "persons" state', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.state('persons')).toBeDefined();
  expect(wrapper.state('persons')).toHaveLength(3);
});

it('App should have a button', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('button')).toHaveLength(1);
})

it('Button should have a onClick handler', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('button').prop('onClick')).toBeDefined();
  expect(wrapper.find('button').prop('onClick')); // this is a function.
  expect(wrapper.find('button').props()).toHaveProperty('onClick');
});

it('Clicking on the button should call the event handler function', () => {
  const wrapper = mount(<App />);
  wrapper.find('button').simulate('click');
  expect(wrapper.state('persons')[0].name).toEqual('Santosh Marigowda');
});

it('Clicking on the Person with message should call the event handler', () => {
  const wrapper = mount(<App />);
  wrapper.find('p#message').first().simulate('click'); //?
  expect(wrapper.state('persons')[0].name).toEqual('Santosh A Marigowda');
});

it('When the input value of first Person is changed, it should update the state', () => {
  const wrapper = mount(<App />);
  wrapper.find('input').first().simulate('change', {target: {value: 'Santosh Arakere Marigowda'}});
  expect(wrapper.state('persons')[0].name).toEqual('Santosh Arakere Marigowda');
});

it('should update the state when username is changed', () => {
  const wrapper = mount(<App />);
  wrapper.find('input.data-test-id-userName').simulate('change', {
    target: {
      value: 'Santosh AM'
    }
  });
  expect(wrapper.state('userName')).toEqual('Santosh AM');
});