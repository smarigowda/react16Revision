import React from 'react';
import './Person.css';

const person = props => {
    return (
        <div className="Person">
            <p id="person" onClick={props.click}>I'm {props.name}, I am {props.age} years old</p>
            <p id="message">{props.children}</p>
            <input type="text" onChange={props.changeHandler} value={props.name}/>
        </div>
    )
}

export default person;