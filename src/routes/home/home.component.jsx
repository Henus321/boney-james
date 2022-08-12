import { Link } from 'react-router-dom';
import home_one from '../../assets/home_one.jpg';
import home_two from '../../assets/home_two.jpg';
// ПЕРЕЖАТЬ ФОТО ВЕСЯТ МНОГО

import './home.styles.scss';

const Home = () => {
  return (
    <div className="home">
      <Link className="home__item" to="/collection/autumn">
        <img className="home__image" src={home_two} alt="Осень" />
        <div className="home__title-box">
          <span className="home__title">Коллекция</span>
          <span className="home__sub-title">Осень 2021</span>
        </div>
      </Link>
      <Link className="home__item" to="/collection/spring">
        <img className="home__image" src={home_one} alt="Весна" />
        <div className="home__title-box">
          <span className="home__title">Коллекция</span>
          <span className="home__sub-title">Весна 2022</span>
        </div>
      </Link>
    </div>
  );
};

export default Home;
