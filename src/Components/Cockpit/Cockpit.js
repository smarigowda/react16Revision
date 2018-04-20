import React from 'react';
import classNames from 'classnames';
import classes from './Cockpit.css';


const cockpit = props => {
  let toggleButtonStyle;
  if(!props.showPersons) {
    toggleButtonStyle = classNames(classes.Button, classes.green);
  } else {
    toggleButtonStyle = classNames(classes.Button, classes.red);
  }
  return (
    <div>
      <h1>Hi I'm a React app</h1>
      <p>This is really working !</p>
      <button className={toggleButtonStyle} onClick={props.togglePersonsHandler}>Toggle Persons</button>
    </div>
  )
}

export default cockpit;