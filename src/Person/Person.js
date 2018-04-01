import React from 'react';

const person = props => {
    return (
        <div>
            <p id="person">I'm {props.name}, I am {props.age} years old</p>
            <p id="message" onClick={props.click}>{props.children}</p>
        </div>
    )
}

export default person;