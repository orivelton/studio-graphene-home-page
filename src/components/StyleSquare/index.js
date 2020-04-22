import React from 'react';
import './StyleSquare.scss';

const StyleSquare = ({icon}) => (
  <div className="square">
    {[...Array(36)].map((item, index) => <span className="square__item" key={index}>{icon}</span>)}
  </div>
);

export default StyleSquare;
