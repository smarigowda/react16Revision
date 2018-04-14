import React from 'react';

const validateText = props => {
  let result;
  if(props.text.length < 5) {
    result = (
      <p>Text is too short</p>
    )
  } else if (props.text.length > 10) {
    result = (
      <p>Text is too long</p>
    )
  } else {
    result = (
      <p>You entered: {props.text}</p>
    )
  }

  return (
    <div>
      {result}
    </div>
  )
}

export default validateText;