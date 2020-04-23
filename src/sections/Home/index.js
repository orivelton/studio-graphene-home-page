import React from 'react';
import './Home.scss';
import CurrentSection from '../../components/CurrentSection';
import Stamp from '../../components/Stamp';

const Home = () => (
  <section className="section home">
    <CurrentSection />
    <div className="big-title uppercase">
      <Stamp textTop={'Gormmet Experience'} text={'Logo'} textBottom={'Gormmet Experience'} />
      <h1 className="big-title__top">
        The Best Foodie 
        <span className="big-title__top--large">Experience</span>
      </h1>
      <h2>Now in London</h2>
      <a href="/" className="request-info uppercase" title="Request more Info">Request Info</a>
    </div>
  </section>

);

export default Home;
