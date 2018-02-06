import React from 'react';

const Option = (props) => (
  <li>{props.option}
    <button onClick={ (ev) => props.handleDeleteOption(props.option) } className="button button--link">
      Remove
    </button>
  </li>
);

export default Option;
