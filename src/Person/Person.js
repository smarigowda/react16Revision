import React from 'react';
import classes from './Person.css';

const person = props => {
    const rnd = Math.random();
    if (rnd > 0.7) {
        // throw new Error();
    }
    return (
        <div className={classes.Person}>
            <p id="person" onClick={props.click}>I'm {props.name}, I am {props.age} years old</p>
            <p id="message">{props.children}</p>
            <input type="text" onChange={props.changeHandler} value={props.name}/>
        </div>
    )
}

export default person;