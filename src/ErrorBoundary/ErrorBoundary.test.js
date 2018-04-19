import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import ErrorBoundary from './ErrorBoundary';
import App from '../App'

function ProblemChild() {
  throw new Error('Error thrown from problem child');
}

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorBoundary><h1>test</h1></ErrorBoundary>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders error', () => {
  const wrapper = mount(<ErrorBoundary><h1>test</h1></ErrorBoundary>);
  wrapper.setState({hasError: true, errorMessage: 'error occurred'});
  wrapper.html() //?
  expect(wrapper.html()).toEqual('<h1>error occurred</h1>');
});

it('should catch errors with componentDidCatch', () => {
  const wrapper = mount(<ErrorBoundary><ProblemChild>test</ProblemChild></ErrorBoundary>);
  // wrapper.instance().componentDidCatch = jest.fn();
  const spy = jest.spyOn(wrapper.instance(), 'componentDidCatch');
  wrapper.update();
  // mount(<ErrorBoundary><h1>test</h1></ErrorBoundary>);
  // mount(<ErrorBoundary><ProblemChild>test</ProblemChild></ErrorBoundary>);
  // expect(spy).toHaveBeenCalled()
});

