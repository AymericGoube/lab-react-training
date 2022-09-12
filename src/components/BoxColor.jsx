import React from 'react';

const BoxColor = (props) => {
  const style = {
    height: '100x',
    width: '100px',
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };
  return <div style={style}>BoxColor</div>;
};

export default BoxColor;
