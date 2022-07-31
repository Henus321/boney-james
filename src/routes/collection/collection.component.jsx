import { Link } from 'react-router-dom';

const Collection = () => {
  return (
    <div>
      <div>Collection</div>
      <Link to="/">Back</Link>
      <Link to="/item">Item</Link>
    </div>
  );
};

export default Collection;
