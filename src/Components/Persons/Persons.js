import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const persons = props => props.persons.map((d, index) => {
  return  <ErrorBoundary key={d.id}>
            <Person
              name={d.name}
              age={d.age}
              click={ index => { props.deletePersonHandler(index) }}
              changeHandler={ (event) => props.nameChangeHandler(event, d.id) } />
          </ErrorBoundary>
});

export default persons;