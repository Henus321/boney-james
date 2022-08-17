import { Link } from 'react-router-dom';
import home_image_one from '../../assets/home_image_one.jpg';
import home_image_two from '../../assets/home_image_two.jpg';

import './home.styles.scss';

const Home = () => {
  return (
    <div className="home">
      <Link className="home__item" to="/collection/2021/autumn">
        <img className="home__image" src={home_image_two} alt="Осень" />
        <div className="home__title-box">
          <span className="home__title">Коллекция</span>
          <span className="home__sub-title">Осень 2021</span>
        </div>
      </Link>
      <Link className="home__item" to="/collection/2022/spring">
        <img className="home__image" src={home_image_one} alt="Весна" />
        <div className="home__title-box">
          <span className="home__title">Коллекция</span>
          <span className="home__sub-title">Весна 2022</span>
        </div>
      </Link>
    </div>
  );
};

export default Home;
