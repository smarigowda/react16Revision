import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Person />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders without crashing', () => {
  shallow(<Person />);
});

it('renders a paragraph', () => {
  const wrapper = shallow(<Person />);
  const element = <p>I'm a Person</p>;
  expect(wrapper.contains(element)).toEqual(true);
})
