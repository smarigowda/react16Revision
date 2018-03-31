import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <p>This is really working !</p>
        <Person/>
        <Person/>
        <Person/>
      </div>
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'), React.createElement('p', null, 'yes it does!'))
    );
  }
}

export default App;
