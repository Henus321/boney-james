import { Link } from 'react-router-dom';
import one from '../../assets/one.jpg';

import './item.styles.scss';

const Item = () => {
  return (
    <div className="item">
      <div className="item__slider">
        <img className="item__photo" src={one} alt="One" />
      </div>
      <div className="item__info">
        <p>
          <Link to="/collection">Back</Link>
          <span> - </span>
          <span>Весна</span>
          <span> - </span>
          <span>Пальто-Халат</span>
        </p>
        <h2 className="item__title">Пальто-халат с поясом</h2>
        <span className="item__item">3 999&#8381;</span>
        <span className="item__item">Артикул: И-132-75232</span>
        <span className="item__item">
          Состав: 75% ПЭ 23% Вискоза 2% Спандекс
        </span>
        <span className="item__item">Подкладка: 100%ПЭ</span>
        <span className="item__item">Рост: 170см</span>
        <span className="item__item">Цвета:</span>
        <div className="item__colors">
          <div className="item__color item__color--1"></div>
          <div className="item__color item__color--2"></div>
          <div className="item__color item__color--3"></div>
        </div>
        <span className="item__item">Размеры:</span>
        <div className="item__sizes">
          <div className="item__size">42</div>
          <div className="item__size">44</div>
          <div className="item__size">46</div>
          <div className="item__size">48</div>
        </div>
        <span className="item__item">Страна-производитель: Россия</span>
        <span className="item__item">Описание:</span>
        <span className="item__item">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus, reprehenderit unde cumque quia provident laborum cum
          molestiae. Quia iste expedita hic eius. Omnis amet voluptatibus
          suscipit nemo debitis asperiores laboriosam. Esse consectetur culpa
          blanditiis debitis ea perspiciatis illo odit eligendi exercitationem
          accusantium assumenda voluptatem quos aliquam dolorum maiores eum
          asperiores repellendus libero ducimus, deserunt quia voluptates nobis?
          Quasi, quo accusamus. Veniam est praesentium sit dolor, ipsum quam
          aperiam quo libero repellendus numquam voluptatum suscipit iure. Enim
          asperiores perspiciatis sed iure. Consequuntur mollitia qui illo.
          Architecto libero quia earum deserunt tempora?
        </span>
      </div>
    </div>
  );
};

export default Item;
