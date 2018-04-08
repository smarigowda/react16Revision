import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import ValidateText from './ValidateText/ValidateText';
import CharText from './CharText/CharText';

class App extends Component {

  state = {
    persons: [
      { id: "jdjhfk", name: "Santosh", age: 45 },
      { id: "sukklf", name: "Roopa", age: 40 },
      { id: "elsnsn", name: "Sukruthi", age: 14 }
    ],
    other: 'Some other state',
    userName: 'Santosh Default Name',
    showPersons: false,
    inputText: '',
    textLenght: ''
  }

  // switchNameHandler = newName => {
  //   console.log('Switch Name Handler Called...');
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 45 },
  //       { name: "Roopa", age: 40 },
  //       { name: "Sukruthi", age: 14 }
  //     ]
  //   })
  // }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(d => d.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = index => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  }
  userNameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value,
    })
  }

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    })
  }

  updateText = event => {
    this.setState({
      inputText: event.target.value
    })
  }
  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((d, index) => {
              return <Person 
                        key={d.id}
                        name={d.name}
                        age={d.age}
                        click={ index => { this.deletePersonHandler(index) }}
                        changeHandler={ (event) => this.nameChangeHandler(event, d.id) } />
            })
          }
          {/* <Person
            click={this.switchNameHandler.bind(this, 'Santosh A Marigowda')}
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changeHandler={this.nameChangeHandler}>My Hobbies: Reading</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
        </div>
      );
    }

    let inputTextArray = this.state.inputText.split('');
    let charList = inputTextArray.map(d => {
      return <CharText char={d} />
    });

    return (
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <p>This is really working !</p>
        <button className="Button" onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        <UserInput userName={this.state.userName} nameChangeHandler={this.userNameChangeHandler}/>
        <UserOutput username={this.state.userName}/>
        <UserOutput username="Roopa"/>
        <div className="assign-2">
          <h1>Assignment 2</h1>
          <input type="text" value={this.state.inputText} onChange={this.updateText}/>
          <p>Length of text = {this.state.inputText.length}</p>
          <ValidateText text={this.state.inputText}/>
          {charList}
        </div>
      </div>
    );
  }
}

export default App;
