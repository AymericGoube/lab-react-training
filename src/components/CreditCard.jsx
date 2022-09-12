import React from 'react';

const CreditCard = (props) => {
  return (
    <div
      className="creditCard1"
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      <div className="creditCardType">{props.type}</div>
      <div style={{ fontSize: '30px' }}>{props.number}</div>
      <div style={{ textAlign: 'start' }}>
        Expires {props.expirationMonth}/{props.expirationYear}
        {props.bank}
      </div>
      <div style={{ textAlign: 'start' }}>{props.owner}</div>
    </div>
  );
};

export default CreditCard;
