import React from 'react';
import './Title.scss';

const Title = ({textTop, text, textBottom, lineWhite}) => (
  <div className="title uppercase">
    <h3 className="title__top" >
      {textTop && textTop}
      {text && <span className={lineWhite ? 'title__text title__text--line-white ': 'title__text'}>{text}</span>}
    </h3>
    {textBottom && <h4 className="title__text-bottom">{textBottom}</h4>}
  </div>
);

export default Title;
