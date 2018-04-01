import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

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