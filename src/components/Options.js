import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions} className="button button--link">Remove All</button>
    {props.options.length === 0 && <p>Add some options to get started.</p>}
    <ol>
      {props.options.map((opt) => {
        return (
          <Option
            key={opt}
            option={opt}
            handleDeleteOption={props.handleDeleteOption}
          />
        );
      })}
    </ol>
  </div>
);


export default Options;
