import React from 'react';
import Title from '../../components/Title';
import './OurMenu.scss';
import ListMenu from '../../components/ListMenu';

const OurMenu = () => (
  <section className="our-menu">
    <div className="our-menu__title">
      <Title text={'Our Menu'} textBottom={'Know more'}/>
    </div>
    <ListMenu />
  </section>
);

export default OurMenu;
