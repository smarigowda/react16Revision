import React from 'react';

import classes from './CharText.css';
const charText = props => {
  return (
    <div className={classes.chartext} onClick={props.clickHandler}>{props.char}</div>
  )
}

export default charText;