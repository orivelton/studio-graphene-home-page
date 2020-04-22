import React from 'react';
import './Contact.scss';
import Title from '../../components/Title';
import FormContact from '../../components/FormContact';

const Contact = () => (
  <section className="contact">
    <div className="contact__box">
      <Title textTop="COLLABORATE" text="WITH US" />
      <p className="contact__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p className="contact__description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
    </div>
    <div className="contact__box">
      <FormContact />
    </div>
  </section>
);

export default Contact;
