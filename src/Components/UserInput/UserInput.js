import React from 'react';

import PropTypes from 'prop-types';

const userInput = props => {
    return (
        <div>
            <input className="data-test-id-userName" type="text" onChange={props.nameChangeHandler} value={props.userName}/>
        </div>
    );
}

userInput.propTypes = {
    nameChangeHandler: PropTypes.func,
    userName: PropTypes.string.isRequired
}
export default userInput;