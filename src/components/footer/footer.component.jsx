import { FaVk } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">Контакты</h2>

      <div className="footer__social-media">
        <h2 className="footer__title">Давайте дружить!</h2>
      </div>
      <div>
        <h2 className="footer__title">Где купить?</h2>
      </div>
      <span>
        Тел.: 8(800)800-00-00
        <br />
        Почта: Abrakadabra@gmail.com
      </span>
      <div className="footer__social">
        <FaVk className="footer__social-item" />
        <FaInstagram className="footer__social-item" />
        <FaYoutube className="footer__social-item" />
      </div>
      <p className="footer__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
        molestias explicabo quam quaerat eos temporibus neque eum! Quae facere
        rem harum aliquid ducimus! Repellat esse quae fugiat. Atque, architecto
        corporis?
      </p>
      <span className="footer__copyright">
        Copyright &#169; No Rights Reserved 2022
      </span>
    </footer>
  );
};

export default Footer;
