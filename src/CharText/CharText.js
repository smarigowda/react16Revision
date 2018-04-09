import React from 'react';

const charText = props => {
  return (
    <div className="char-text" onClick={props.clickHandler}>{props.char}</div>
  )
}

export default charText;