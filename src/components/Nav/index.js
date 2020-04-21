import React from 'react';
import itemMenu from '../../mock/menu';
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <ul className="navigation">
        {
          itemMenu.map(({name, href, title}) => (
            <li className="navigation__item">
              <a className="navigation__link" href={href} title={title}>{name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default Nav;
