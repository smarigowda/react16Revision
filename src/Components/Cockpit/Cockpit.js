import React from 'react';
import classNames from 'classnames';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';


const cockpit = props => {
  let toggleButtonStyle;
  if(!props.showPersons) {
    toggleButtonStyle = classNames(classes.Button, classes.green);
  } else {
    toggleButtonStyle = classNames(classes.Button, classes.red);
  }
  return (
    <Aux>
      <button className="login" onClick={props.loginHandler}>Login</button>
      <h1>Hi I'm a React app</h1>
      <p>This is really working !</p>
      <button className={toggleButtonStyle} onClick={props.togglePersonsHandler}>Toggle Persons</button>
    </Aux>
  )
}

export default cockpit;