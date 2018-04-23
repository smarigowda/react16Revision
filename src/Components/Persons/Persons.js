import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


class Persons extends Component {
  render() {
    return this.props.persons.map((d, index) => {
      return  <ErrorBoundary key={d.id}>
                <Person
                  name={d.name}
                  age={d.age}
                  click={ index => { this.props.deletePersonHandler(index) }}
                  changeHandler={ (event) => this.props.nameChangeHandler(event, d.id) } />
              </ErrorBoundary>
    });
  }
}

export default Persons;