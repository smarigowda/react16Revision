import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

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

it('Person should have on click handler on message element', () => {
  const clickHandler = jest.fn();
  const wrapper = shallow(<Person click={clickHandler}/>);
  expect(wrapper.find('#message').props()).toHaveProperty('onClick');
  expect(wrapper.find('#message').prop('onClick')).toBeDefined();
});

it('Clicking on the message should call the event handler function', () => {
  const clickHandler = jest.fn(); 
  const wrapper = mount(<Person click={clickHandler}/>);
  wrapper.find('#message').simulate('click');
  expect(clickHandler.mock.calls.length).toBe(1);
})

