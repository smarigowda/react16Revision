import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import UserInput from './UserInput';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserInput />, div);
});

it('UserInput should have an input element', () => {
    const wrapper = shallow(<UserInput />);
    expect(wrapper.find('input')).toHaveLength(1);
});

it('should have onChange attr', () => {
    const wrapper = shallow(<UserInput />);
    expect(wrapper.find('input').props()).toHaveProperty('onChange');
})

