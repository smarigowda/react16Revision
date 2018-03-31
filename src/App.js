import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <p>This is really working !</p>
        <Person name="Santosh" age="45">My Hobbies: Reading</Person>
        <Person name="Roopa" age="40"/>
        <Person name="Sukruthi" age="13"/>
      </div>
    );
  }
}

export default App;
