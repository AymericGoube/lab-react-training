import React from 'react';

const Greetings = (props) => {
  return (
    <>
      <p className="main">
        {props.main.word}
        {props.name}
      </p>
    </>
  );
};

export default Greetings;
