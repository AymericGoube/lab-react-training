import React from 'react';
import '../App.css';

function IdCard(props) {
  return (
    <div className="main">
      <div>
        <img src={props.main.picture}></img>
      </div>
      <div className="mainContent">
        <p>First name:{props.main.firstName}</p>
        <p> Last name :{props.main.lastName}</p>
        <p> Gender : {props.main.gender}</p>
        <p>Height: {props.main.height}</p>
        <p>Birth : {props.main.birth[0]}</p>
      </div>
    </div>
  );
}

export default IdCard;
