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

  switchNameHandler = newName => {
    console.log('Switch Name Handler Called...');
    this.setState({
      persons: [
        { name: newName, age: 45 },
        { name: "Roopa", age: 40 },
        { name: "Sukruthi", age: 14 }
      ]
    })
  }

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 45 },
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
        <button className="Button" onClick={() => this.switchNameHandler('Santosh Marigowda')}>Switch Name</button>
        <Person
          click={this.switchNameHandler.bind(this, 'Santosh A Marigowda')}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changeHandler={this.nameChangeHandler}>My Hobbies: Reading</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
