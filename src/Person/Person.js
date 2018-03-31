import React from 'react';

const person = props => {
    console.log('set break here...');
    return (
        <div>
            <p id="person">I'm {props.name}, I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;