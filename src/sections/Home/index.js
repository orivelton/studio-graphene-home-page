import React from 'react';
import './Home.scss';
import Stamp from '../../components/Stamp';

const Home = () => (
  <section className="section home">
    <Stamp textTop={'Gormmet Experience'} text={'Logo'} textBottom={'Gormmet Experience'} />

    <div className="big-title uppercase">
      <h1 className="big-title__top">
        The Best Foodie 
        <span className="big-title__top--large">Experience</span>
      </h1>
      <h2>Now in London</h2>
    </div>

  </section>

);

export default Home;
