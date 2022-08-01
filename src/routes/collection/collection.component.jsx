import { Link } from 'react-router-dom';
import one from '../../assets/one.jpg';
import two from '../../assets/two.jpg';
import three from '../../assets/three.jpg';
import four from '../../assets/four.jpg';
import five from '../../assets/five.jpg';
import six from '../../assets/six.jpg';

import { FaHeart } from 'react-icons/fa';

import './collection.styles.scss';

const Collection = () => {
  return (
    <div className="collection">
      <span className="collection__menu">
        <Link to="/">На главную</Link>
        <span> - </span>
        <span>Весна</span>
      </span>
      <h2 className="collection__title">Коллекция женских пальто - 2022</h2>

      <div className="collection__body">
        <Link to="item" className="collection__item">
          <img className="collection__image" src={one} alt="" />
          <span className="collection__span">Пальто-халат с поясом</span>
          <span className="collection__span">3 999&#8381;</span>
          <div className="collection__color-circles">
            <div className="color color--1"></div>
            <div className="color color--2"></div>
            <div className="color color--3"></div>
          </div>
          <FaHeart className="collection__icon" />
        </Link>
        <Link to="item" className="collection__item">
          <img className="collection__image" src={two} alt="" />
          <span className="collection__span">Прямое пальто</span>
          <span className="collection__span">3 999&#8381;</span>
          <div className="collection__color-circles">
            <div className="color color--1"></div>
            <div className="color color--2"></div>
            <div className="color color--3"></div>
          </div>
          <FaHeart className="collection__icon" />
        </Link>
        <Link to="item" className="collection__item">
          <img className="collection__image" src={three} alt="" />
          <span className="collection__span">Прямое пальто с поясом</span>
          <span className="collection__span">3 999&#8381;</span>
          <div className="collection__color-circles">
            <div className="color color--1"></div>
            <div className="color color--2"></div>
            <div className="color color--3"></div>
          </div>
          <FaHeart className="collection__icon" />
        </Link>
        <Link to="item" className="collection__item">
          <img className="collection__image" src={four} alt="" />
          <span className="collection__span">Двубортное пальто с патами</span>
          <span className="collection__span">3 999&#8381;</span>
          <div className="collection__color-circles">
            <div className="color color--1"></div>
            <div className="color color--2"></div>
            <div className="color color--3"></div>
          </div>
          <FaHeart className="collection__icon" />
        </Link>
        <Link to="item" className="collection__item">
          <img className="collection__image" src={five} alt="" />
          <span className="collection__span">Пальто-халат с заносом</span>
          <span className="collection__span">3 999&#8381;</span>
          <div className="collection__color-circles">
            <div className="color color--1"></div>
            <div className="color color--2"></div>
            <div className="color color--3"></div>
          </div>
          <FaHeart className="collection__icon" />
        </Link>
        <Link to="item" className="collection__item">
          <img className="collection__image" src={six} alt="" />
          <span className="collection__span">Двубортное пальто</span>
          <span className="collection__span">3 999&#8381;</span>
          <div className="collection__color-circles">
            <div className="color color--1"></div>
            <div className="color color--2"></div>
            <div className="color color--3"></div>
          </div>
          <FaHeart className="collection__icon" />
        </Link>
      </div>
    </div>
  );
};

export default Collection;
