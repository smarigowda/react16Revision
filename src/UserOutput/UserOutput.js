import React from 'react';
import PropTypes from 'prop-types';

const userOutput = props => {
    return (
        <div>
            <h1>{props.username}</h1>
            <p>This generator uses a dictionary of Latin words to construct passages of Lorem Ipsum text that meet your desired length. </p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat ullamcorper nec vestibulum nascetur</p>
        </div>
    )
}

userOutput.propTypes = {
    username: PropTypes.string.isRequired,
}

export default userOutput;