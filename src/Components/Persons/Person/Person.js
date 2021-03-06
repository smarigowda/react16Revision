import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
        console.log('[Person.js] constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] componentDidMount');
        if( this.props.position === 0 ) {
            this.inputElement.current.focus();
        }
    }
    render() {
        console.log('[Person.js] render()');
        return (
            <WithClass classes={classes.Person}>
                {this.props.isAuthenticated ? <p>I'm Authenticated</p>: null}
                <p id="person" onClick={this.props.click}>I'm {this.props.name}, I am {this.props.age} years old</p>
                <p id="message">{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changeHandler}
                    value={this.props.name}
                />
            </WithClass>
        ) 
    }
}

export default Person;