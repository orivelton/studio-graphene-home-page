import React from 'react';
import './FormContact.scss';
import StyleSquare from '../StyleSquare';

const FormContact = () => (
  <form className="form">
    <span class="icon icondetail02_2x form__icon"></span>
    <div className="form__box">
      <label className="form__label" htmlFor="name">Name</label>
      <input className="form__input" id="name" type="text" placeholder="Name"/>

      <label className="form__label" htmlFor="phone">Phone</label>
      <input className="form__input" id="phone" type="tel" placeholder="phone"/>

      <label className="form__label" htmlFor="experience">Experience</label>
      <select id="experience" className="form__select">
        <option>Select</option>
      </select>
    </div>

    <div className="form__box">
      <label className="form__label" htmlFor="surname">Surname</label>
      <input className="form__input" id="surname" type="text" placeholder="Surname"/>

      <label className="form__label" htmlFor="email">EMAIL ADDRESS</label>
      <input className="form__input" id="email" type="email" placeholder="email"/>
      
      <label className="form__label" htmlFor="hear">Wherw did you hear about us?</label>
      <select id="hear" className="form__select">
        <option>Select</option>
      </select>
      <button className="form__btn uppercase">Send</button>
    </div>
  </form>
);

export default FormContact;
