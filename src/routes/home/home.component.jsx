import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/collection">Collection 2022</Link>
      <Link to="/collection">Sale</Link>
    </div>
  );
};

export default Home;
