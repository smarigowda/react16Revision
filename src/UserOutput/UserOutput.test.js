import React from 'react';
import ReactDOM from 'react-dom';
import UserOutput from './UserOutput';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should have two paragrphs', () => {
    const wrapper = shallow(<UserOutput />);
    expect(wrapper.find('p')).toHaveLength(2);
});