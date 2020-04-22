import React from 'react';
import './Footer.scss';
import linksFooter from '../../mock/linksFooter';
import Title from '../../components/Title';

const Footer = () => {

  const buildItemFooter = (links) => links.map(item => <a className="pages__link" href="/" title={`Go to ${item}`}>{item}</a>);

  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="footer__links">
          {
            linksFooter.map((item, index) => {
              const { title, links } = item;

              return (
                <div className="pages">
                  <p className="pages__title uppercase">{`${title} ${++index}`}</p>
                  {buildItemFooter(links)}
                </div>
                
              )
            })
          }

        </div>
        <div>
          <Title textTop={'THIS IS THE'} text={'Logo'}/>
        </div>
      </div>

      <div className="footer__box">
        <p class="copyright">2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
        <ul>
          Social
        </ul>
      </div>
    </footer>
  );
};

export default Footer;