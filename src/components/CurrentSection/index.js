import React, { useEffect, useState } from 'react';
import './CurrentSection.scss';
import { getSection, parallax } from '../../helpers/utils';

const CurrentSection = () => {
  const [section, setSection] = useState(1);
  
  const handleScroll = () => {
    const screen = document.documentElement.clientHeight / 2 - 100;
    const sections = getSection();
    sections.forEach((item, index) => {
      const { top, bottom } = item.getBoundingClientRect();
      top <= screen && bottom >= screen && setSection(++index);
    });

    parallax();
  };

  useEffect(() => window.addEventListener('scroll', handleScroll), []);

  return (
    <div className="count-section">
      {
        [...Array(3)].map((item, index) => {
          const isCurrentSection = section === ++index;

          return (
            <span key={`${index}${index}`} className={isCurrentSection ? 'current-section current-section--double' : 'current-section'}>
              { isCurrentSection && ('0' + section).slice(-2)}
            </span>
          )
        })
      }
    </div>
  );
};

export default CurrentSection;
