import React, { PureComponent } from 'react';
import classes from './App.css';
import UserOutput from '../Components/UserOutput/UserOutput';
import UserInput from '../Components/UserInput/UserInput';
import ValidateText from '../Components/ValidateText/ValidateText';
import CharText from '../Components/CharText/CharText';
import classNames from 'classnames';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js] shouldComponentUpdate', nextProps, nextState);
  //   // prevents from rendering if objects have the same values
  //   return !Object.is(nextState, this.state);
  //   // return true;
  //   // return false;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[App.js] componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

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
    textLenght: '',
    togglePersonsCount: 0,
    isAuthenticated: false
  }

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
    this.setState((prevState, props) => {
      return {
        showPersons: !showPersons,
        togglePersonsCount: prevState.togglePersonsCount + 1
      }
    });
  }

  updateText = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  deleteCharTextHandler = index => {
    const inputTextArray = this.state.inputText.split('');
    inputTextArray.splice(index, 1);
    const newText = inputTextArray.join('');
    this.setState({
      inputText: newText
    })
  }

  loginHandler = () => {
    this.setState({
      isAuthenticated: true
    });
  }

  render() {
    console.log('[App.js] render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            deletePersonHandler={this.deletePersonHandler}
            nameChangeHandler={this.nameChangeHandler}
          />
        </div>
      );
    }

    let inputTextArray = this.state.inputText.split('');
    let charList = inputTextArray.map((d, index) => {
      return <CharText key={index} char={d} clickHandler={ (event) => this.deleteCharTextHandler(index) }/>
    });



    return (
      <WithClass classes={classNames(classes.App, classes.body)}>
        <h1>{this.props.title}</h1>
        <Cockpit
          loginHandler={this.loginHandler}
          showPersons={this.state.showPersons}
          togglePersonsHandler={this.togglePersonsHandler}
        />
        <AuthContext.Provider value={this.state.isAuthenticated}>
          {persons}
        </AuthContext.Provider>
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
        <button className="always-show" onClick={
          () => { this.setState({ showPersons: true }) }
        }>Always Show Persons</button>
      </WithClass>
    );
  }
}

App.propTypes = {
  togglePersonsCount: PropTypes.number,
  persons: PropTypes.object,
  other: PropTypes.string,
  userName: PropTypes.string,
  showPersons: PropTypes.bool,
  inputText: PropTypes.string,
  textLength: PropTypes.string,
}
export default App;
