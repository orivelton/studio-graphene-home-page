import React from 'react';
import Title from '../../components/Title';
import './OurMenu.scss';

const OurMenu = () => (
  <section className="our-menu">
    <Title text={'Our Menu'} textBottom={'Know more'}/>
    <div>
      <ul className="list-menu">
        <li className="list-menu__type">
          <h3 className="list-menu__title uppercase">
            Starters
          </h3>
        </li>
        <li className="list-menu__type">
          <h3 className="list-menu__title uppercase">
            Main courses
          </h3>
          <p>QUINOA CROQUETTAS</p>
          <span>Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</span>
          <p>€4.95</p>
        </li>
        <li className="list-menu__type">
          <h3 className="list-menu__title uppercase">
            Sides
          </h3>
        </li>
        <li className="list-menu__type">
          <h3 className="list-menu__title uppercase">
            Desserts
          </h3>
        </li>
      </ul>
    </div>

  </section>
);

export default OurMenu;
