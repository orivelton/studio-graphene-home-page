import React, { useEffect, useState } from 'react';
import './CurrentSection.scss';

const CurrentSection = () => {
  const [section, setSection] = useState(1);
  
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const screen = document.documentElement.clientHeight / 2;
    
    [...sections].forEach((item, index) => {
      const { top, bottom } = item.getBoundingClientRect();
      top <= screen && bottom >= screen && setSection(++index);
    });
  }

  useEffect(() => {window.addEventListener('scroll', handleScroll);}, []);

  return (
    <span className="current-section">{section}</span>
  );
};

export default CurrentSection;
