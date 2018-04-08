import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

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

  // nameChangeHandler = event => {
  //   this.setState({
  //     persons: [
  //       { name: event.target.value, age: 45 },
  //       { name: "Roopa", age: 40 },
  //       { name: "Sukruthi", age: 14 }
  //     ]
  //   })
  // }

  deletePersonHandler = index => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  }
  userNameChangeHandler = event => {
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
                        click={ index => { this.deletePersonHandler(index) } } />
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

    return (
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <p>This is really working !</p>
        <button className="Button" onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        <UserInput userName={this.state.userName} nameChangeHandler={this.userNameChangeHandler}/>
        <UserOutput username={this.state.userName}/>
        <UserOutput username="Roopa"/>
      </div>
    );
  }
}

export default App;
