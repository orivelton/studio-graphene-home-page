import React from 'react';
import './ListMenu.scss';
import listMenu from '../../mock/listMenu';

const ListMenu = () => {

  const buildItem = ({title, description, price}) => (
    <div className="list-menu__item">
      <p className="list-menu__name">{title}</p>
      <span className="list-menu__description">{description}</span>
      <p className="list-menu__price">€{price}</p>
    </div>
  );

  return (
    <ul className="list-menu">
      {
        listMenu.map((item) => {
          const { title, menu} = item;
            return (
              <li className="list-menu__type">
                <h3 className="list-menu__title uppercase">{title}</h3>
                { menu.map(item => buildItem(item)) }
              </li>
            )
        })
      }
    </ul>
  );
};

export default ListMenu;
