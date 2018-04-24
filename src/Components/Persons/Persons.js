import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Persons.js] componentWillRecieveProps: Update Hook', nextProps)
  }

  shouldComponentUpdate(nextProps) {
    console.log('[Persons.js] shouldComponentUpdate: Update Hook', nextProps, this.props);
    console.log('[Persons.js] Object.is(nextProps.persons, this.props.persons) = ', Object.is(nextProps.persons, this.props.persons))
    // prevents from rendering if objects have the same values
    return !Object.is(nextProps.persons, this.props.persons);
    // return true;
    // return false;
  }

  componentWillUpdate() {
    console.log('[Persons.js] componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] render()');
    return this.props.persons.map((d, index) => {
      return  <Person
                  key={d.id}
                  name={d.name}
                  age={d.age}
                  click={ index => { this.props.deletePersonHandler(index) }}
                  changeHandler={ (event) => this.props.nameChangeHandler(event, d.id) } />
    });
  }
}

export default Persons;