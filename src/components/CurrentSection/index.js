import React, { useEffect, useState } from 'react';
import './CurrentSection.scss';

const CurrentSection = () => {
  const [section, setSection] = useState(1);

  const getSection = () => [...document.querySelectorAll('section')];
  
  const handleScroll = () => {
    const screen = document.documentElement.clientHeight / 2 - 100;
    const sections = getSection();
    sections.forEach((item, index) => {
      const { top, bottom } = item.getBoundingClientRect();
      top <= screen && bottom >= screen && setSection(++index);
    });
  }

  useEffect(() => window.addEventListener('scroll', handleScroll), []);

  return (
    <div className="count-section">
      {
        [...Array(4)].map((item, index) => {
          const isCurrentSectio = section === ++index;

          return(
            <span key={`${index}${index}`} className={isCurrentSectio ? 'current-section current-section--double' : 'current-section'}>
              { isCurrentSectio && ('0' + section).slice(-2)}
              
            </span>
          )
        })
      }
    </div>
  );
};

export default CurrentSection;
