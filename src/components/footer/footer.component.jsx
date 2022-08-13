import { FaVk } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
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
        Тел.: 8 (800) 000-000-00
        <br />
        Почта: Tyrantbud@yandex.ru
      </span>
      <div className="footer__social">
        <a
          className="footer__social-item"
          rel="noopener noreferrer"
          target="_blank"
          href="https://youtube.com/"
        >
          <FaYoutube />
        </a>
        <a
          className="footer__social-item"
          rel="noopener noreferrer"
          target="_blank"
          href="https://vk.com/"
        >
          <FaVk />
        </a>
        <a
          className="footer__social-item"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Henus321"
        >
          <FaGithub />
        </a>
      </div>
      <p className="footer__text">
        Продукцию нашего бренда вы можете приобрести, в магазинах торговых сетей{' '}
        <a
          className="footer__social-link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.fashouse.ru/shops"
        >
          Fashouse
        </a>{' '}
        и Familia
      </p>
      <span className="footer__copyright">
        2022 &#169; Developed by Alexandr Erkhov
      </span>
    </footer>
  );
};

export default Footer;
