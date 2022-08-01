import { Link } from 'react-router-dom';
import home_one from '../../assets/home_one.jpg';
import home_two from '../../assets/home_two.jpg';
// ПЕРЕЖАТЬ ФОТО ВЕСЯТ МНОГО

import './home.styles.scss';

const Home = () => {
  return (
    <div className="home">
      <Link className="home__item" to="/collection">
        <img className="home__item-image" src={home_two} alt="" />
        <h2 className="home__item-title">Sellout</h2>
      </Link>
      <Link className="home__item" to="/collection">
        <img className="home__item-image" src={home_one} alt="" />
        <h2 className="home__item-title">Collection</h2>
      </Link>
    </div>
  );
};

export default Home;
