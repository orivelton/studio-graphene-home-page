import React from 'react';
import itemMenu from '../../mock/menu';
import './Nav.scss';
import Logo from '../Logo/Logo';

const Nav = () => {
  return (
    <nav class="header">
      <ul className="navigation">
        <li>
          <Logo />
        </li>
        {
          itemMenu.map(({name, href, title}) => (
            <li className="navigation__item">
              <a className="navigation__link uppercase" href={href} title={title}>{name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default Nav;
