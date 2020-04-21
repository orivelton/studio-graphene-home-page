import React from 'react';
import './Stamp.scss'

const Stamp = ({textTop, text, textBottom}) => (
  <div className="stamp uppercase">
    <p className="stamp__text-top">•{textTop}•</p>
    <p className="stamp__text">{text}</p>
    <p className="stamp__text-bottom">{textBottom}</p>
  </div>
);

export default Stamp;
