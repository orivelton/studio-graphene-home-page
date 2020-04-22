import React from 'react';
import Title from '../../components/Title';
import './OurMenu.scss';
import ListMenu from '../../components/ListMenu';

const OurMenu = () => (
  <section className="our-menu">
    <Title text={'Our Menu'} textBottom={'Know more'}/>
    <ListMenu />
  </section>
);

export default OurMenu;
