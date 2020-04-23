import React from 'react';
import {itemMenu, itemMenuRight} from '../../mock/menu';
import './Nav.scss';
import Logo from '../Logo';

const Nav = () => {
  return (
    <nav className="header">
      <ul className="navigation">
        <li>
          <Logo />
        </li>
        {
          itemMenu.map(({name, href, title}) => (
            <li className="navigation__item" key={name}>
              <a className="navigation__link uppercase" href={href} title={title}>{name}</a>
            </li>
          ))
        }
      </ul>
      <ul className="navigation">
        {
          itemMenuRight.map(({name, href, title}) => (
            <li className="navigation__item" key={name}>
              <a className="navigation__link uppercase" href={href} title={title}>{name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default Nav;
