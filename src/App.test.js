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

it('Clicking on the button for first time should set the state of showPersons to true and show three Persons', () => {
  const wrapper = mount(<App />);
  expect(wrapper.state('showPersons')).toEqual(false);
  expect(wrapper.find('div.Person')).toHaveLength(0);
  wrapper.find('button').simulate('click');
  expect(wrapper.state('showPersons')).toEqual(true);
  expect(wrapper.find('div.Person')).toHaveLength(3);
});

it('Clicking on a Person should delete the Person', () => {
  const wrapper = mount(<App />);
  wrapper.find('button').simulate('click');
  wrapper.find('p#person').first().simulate('click');
  expect(wrapper.find('p#person')).toHaveLength(2);
});

// it('When the input value of first Person is changed, it should update the state', () => {
//   const wrapper = mount(<App />);
//   wrapper.find('button').simulate('click');
//   wrapper.find('input').first().simulate('change', {target: {value: 'Santosh Arakere Marigowda'}});
//   expect(wrapper.state('persons')[0].name).toEqual('Santosh Arakere Marigowda');
// });

it('should update the name of a person when input is updated', () => {
  const wrapper = mount(<App />);
  wrapper.find('button').simulate('click');
  wrapper.find('.Person input').first().simulate('change', {target: {value: 'My new value'}}); //?
  expect(wrapper.state('persons')[0].name).toBe('My new value');
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