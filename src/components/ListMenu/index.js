import React from 'react';
import './ListMenu.scss';
import listMenu from '../../mock/listMenu';

const ListMenu = () => {

  const buildItem = ({title, description, price}) => (
    <>
      <p>{title}</p>
      <span>{description}</span>
      <p>€{price}</p>
    </>
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
