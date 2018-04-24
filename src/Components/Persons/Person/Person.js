import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] constructor', props);
      }
    
      componentWillMount() {
        console.log('[Person.js] componentWillMount');
      }
    
      componentDidMount() {
        console.log('[Person.js] componentDidMount');
      }
    render() {
        console.log('[Person.js] render()');
        return (
            <div className={classes.Person}>
                <p id="person" onClick={this.props.click}>I'm {this.props.name}, I am {this.props.age} years old</p>
                <p id="message">{this.props.children}</p>
                <input type="text" onChange={this.props.changeHandler} value={this.props.name}/>
            </div>
        ) 
    }
}

export default Person;