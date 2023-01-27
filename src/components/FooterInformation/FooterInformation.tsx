import React from "react";
import { Link } from "react-router-dom";
import { WIP_ROUTE } from "../../constants";

import "./footerInformation.scss";

const FooterInformation = () => {
  return (
    <div className="footer-information">
      <div className="footer-information__column">
        <h3 className="title-tertiary">О Нас</h3>
        <p>
          На сегодняшний день Boney James - это бренд, который получил признание
          покупателей и ассоциируется с качеством и стилем. Коллекция постоянно
          обновляется, а четкий крой и внимание к деталям способствуют развитию
          бренда.
        </p>
      </div>
      <div className="footer-information__column">
        <h3 className="title-tertiary">Соглашения</h3>
        <nav>
          <ul>
            <li>
              <Link to={WIP_ROUTE}>Соглашение о конфиденциальности</Link>
            </li>
            <li>
              <Link to={WIP_ROUTE}>
                Уведомление об использовании Cookie файлов
              </Link>
            </li>
            <li>
              <Link to={WIP_ROUTE}>
                Экологическая и социальная ответственность
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-information__column">
        <h3 className="title-tertiary">Служба поддержки</h3>
        <span>+7 999 999 99 99</span>
        <span>support@boney-james.com</span>
        <span>с 08:00 до 22:00 по МСК</span>
      </div>
    </div>
  );
};

export default FooterInformation;
