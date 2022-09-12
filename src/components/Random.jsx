import React from 'react';

const Random = (props) => {
  function getRandom() {
    return (
      Math.random() * (props.maxNumber - props.minNumber) + props.minNumber
    );
  }
  return (
    <div className="main">
      Random value between {props.minNumber} and {props.maxNumber} is equal to
      {getRandom().toFixed()}
    </div>
  );
};

export default Random;
