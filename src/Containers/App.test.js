import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

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

it('App component should have a "title" props', () => {
  const wrapper = mount(<App title="React Revision"/>);
  wrapper.html(); //?
  expect(wrapper.props().title).toBeDefined();
  expect(wrapper.state('persons')).toBeDefined();
});

it('App should have a button', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('.Button .green')).toHaveLength(1);
})

it('Button should have a onClick handler', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('.Button').prop('onClick')).toBeDefined();
  expect(wrapper.find('.Button').prop('onClick')); // this is a function.
  expect(wrapper.find('.Button').props()).toHaveProperty('onClick');
});

it('Clicking on Login button should set the authenticated state to true', () => {
  const wrapper = mount(<App />);
  expect(wrapper.state().isAuthenticated).toBe(false);
  wrapper.find('.Button').simulate('click');
  wrapper.find('.login').simulate('click') //?
  expect(wrapper.state().isAuthenticated).toBe(true);
});

it('Clicking on the button for first time should set the state of showPersons to true and show three Persons', () => {
  const wrapper = mount(<App />); //?
  expect(wrapper.state('showPersons')).toEqual(false);
  wrapper.find('[class*="Person"]') //?
  expect(wrapper.find('[class*="Person"]')).toHaveLength(0);
  wrapper.find('.Button'); //?
  wrapper.find('.Button').simulate('click');
  expect(wrapper.state('showPersons')).toEqual(true);
  debugger;
  console.log(wrapper.html()) //?
  wrapper.find('[class*="Person"]'); //?
  expect(wrapper.find('div.Person')).toHaveLength(3);
});

it('Clicking on a Person should delete the Person', () => {
  const wrapper = mount(<App />);
  wrapper.find('.Button .green').simulate('click');
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
  wrapper.html() //?
  wrapper.find('.Button .green').simulate('click');
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

it('should display the text length', () => {
  const wrapper = mount(<App />);
  wrapper.find('div.assign-2 input').simulate('change', {
    target: {
      value: 'Santosh AM'
    }
  });
  let actual = wrapper.find('div.assign-2 p').first().text() //?
  expect(actual).toEqual('Length of text = 10');
})

it('should render CharText component', () => {
  const wrapper = mount(<App />);
  wrapper.setState({ inputText: 'ROOA'});
  wrapper.render();
  wrapper.html(); //?
})

it('should remove the CharText comp on click', () => {
  const wrapper = mount(<App />);
  wrapper.setState({
    inputText: 'Santosh'
  });
  wrapper.html(); //?
  wrapper.find('.chartext').first().simulate('click');
  expect(wrapper.find('.chartext').first().text()).toBe('a');
});

it('clicking on always show button should show 3 persons', () => {
  const wrapper = mount(<App />);
  wrapper.find('.always-show').first().simulate('click');
  expect(wrapper.find('div.Person')).toHaveLength(3);
})