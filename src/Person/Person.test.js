import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

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
  expect(wrapper.text()).toEqual(expectedMatching);
  expect(wrapper.find('#person')).toHaveLength(1);
});

it('renders the text inside the tag', () => {
  const wrapper = shallow(<Person name="Santosh" age="44">My Hobby: Coding</Person>);
  const expectedMatching = expect.stringMatching(/My Hobby: Coding/);
  expect(wrapper.text()).toEqual(expectedMatching);
});

it('renders correctly', () => {
  const clickHandler = jest.fn();
  const tree = renderer.create(<Person name="Santosh" age="45" click={clickHandler} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Person should have on click handler', () => {
  const clickHandler = jest.fn();
  const wrapper = shallow(<Person click={clickHandler}/>);
  expect(wrapper.find('#person').props()).toHaveProperty('onClick');
  expect(wrapper.find('#person').prop('onClick')).toBeDefined();
});

it('Clicking on the Person should call the event handler function', () => {
  const clickHandler = jest.fn();
  const wrapper = mount(<Person click={clickHandler}/>);
  wrapper.find('#person').simulate('click');
  expect(clickHandler.mock.calls.length).toBe(1);
});

it('Person should have an input element', () => {
  const wrapper = shallow(<Person name="Santosh" age="45"/>);
  expect(wrapper.find('input')).toHaveLength(1);
});

it('Input element should have a onChange attr', () => {
  const wrapper = shallow(<Person name="Santosh" age="45"/>);
  expect(wrapper.find('input').props()).toHaveProperty('onChange');
});

it('When the input value is changed, change handler should be called', () => {
  const changeHandler = jest.fn();
  const wrapper = mount(<Person changeHandler={changeHandler}/>);
  wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
  expect(changeHandler.mock.calls.length).toBe(1);
})

