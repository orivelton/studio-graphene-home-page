import React from 'react';
import './Stamp.scss'

const Stamp = ({text}) => (
  <div className="stamp uppercase icon iconstamp">
    <p className="stamp__text">{text}</p>
  </div>
);

export default Stamp;
