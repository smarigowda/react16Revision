import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Santosh", age: 45 },
      { name: "Roopa", age: 40 },
      { name: "Sukruthi", age: 14 }
    ],
    other: 'Some other state'
  }

  switchNameHandler = () => {
    console.log('Switch Name Handler Called...');
    this.setState({
      persons: [
        { name: "Santosh Marigowda", age: 45 },
        { name: "Roopa", age: 40 },
        { name: "Sukruthi", age: 14 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <p>This is really working !</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Reading</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
