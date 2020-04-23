import React from 'react';
import './Footer.scss';
import Title from '../../components/Title';
import { linksFooter } from '../../mock/mock-data';

const Footer = () => {

  const buildItemFooter = (links) => links.map((item, index) =>
    <a key={index} className="pages__link" href="/" title={`Go to ${item}`}>
      {item}
    </a>
  );

  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="footer__links">
          {
            linksFooter.map((item, index) => {
              const { title, links } = item;

              return (
                <div className="pages" key={index}>
                  <p className="pages__title uppercase">{`${title} ${++index}`}</p>
                  {buildItemFooter(links)}
                </div>
              )
            })
          }

        </div>
        <Title textTop={'This is the'} text={'Logo'} colorSecondary />
      </div>

      <div className="footer__box">
        <p className="copyright">2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
        <ul className="social">
          <li className="social__item">
            <a href="/" className="social__icon icon iconfacebook-icon" title="Go to Facebook">
              <span className="social__name">Facebook</span>
            </a>
          </li>
          <li className="social__item">
            <a href="/" className="social__icon icon icontwitter-icon" title="Go to twitter">
              <span className="social__name">twitter</span>
            </a>
          </li>
          <li className="social__item">
            <a href="/" className="social__icon icon iconinstagram-icon" title="Go to instagram">
              <span className="social__name">instagram</span>
            </a>
          </li>
          <li className="social__item">
            <a href="/" className="social__icon icon iconLinkedin-icon" title="Go to Linkedin">
              <span className="social__name">Linkedin</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;