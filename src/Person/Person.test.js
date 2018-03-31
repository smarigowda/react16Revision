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

it('renders a paragraph with name and age', () => {
  const wrapper = shallow(<Person name="Santosh" age="45"/>);
  // const expectedMatching = expect.stringMatching(/I'm \w+, I am \d+ years old/);
  const expectedMatching = expect.stringMatching(/I'm Santosh, I am 45 years old/);
  console.log(wrapper.text());
  expect(wrapper.text()).toEqual(expectedMatching);
  expect(wrapper.find('#person')).toHaveLength(1);
})

it('renders the text inside the tag', () => {
  const wrapper = shallow(<Person name="Santosh" age="44">My Hobby: Coding</Person>);
  console.log(wrapper.text());
  const expectedMatching = expect.stringMatching(/My Hobby: Coding/);
  expect(wrapper.text()).toEqual(expectedMatching);
})
