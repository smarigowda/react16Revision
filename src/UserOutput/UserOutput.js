import React from 'react';
import PropTypes from 'prop-types';

const userOutput = props => {
    return (
        <div>
            <h1>{props.username}</h1>
            <p>This generator uses a dictionary of Latin words to construct passages of Lorem Ipsum text that meet your desired length. The sentence and paragraph durations and punctuation dispersal are calculated using Gaussian distribution, based on statistical analysis of real world texts. This ensures that the generated Lorem Ipsum text is unique, free of repetition and also resembles readable text as much as possible</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat ullamcorper nec vestibulum nascetur, posuere potenti tellus montes aliquet lobortis justo viverra ultricies pulvinar integer scelerisque mus, curabitur quisque lacinia dictum quam vivamus libero mattis nisi parturient hendrerit. Rhoncus fames tempor arcu ante praesent nulla, sagittis ultrices ligula tellus congue velit eros, leo condimentum justo parturient lectus. Facilisis elementum litora enim cum donec interdum a condimentum rhoncus</p>
        </div>
    )
}

userOutput.propTypes = {
    username: PropTypes.string.isRequired,
}

export default userOutput;