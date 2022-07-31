import { Link } from 'react-router-dom';

const Item = () => {
  return (
    <div>
      <div>Item</div>
      <Link to="/collection">Back</Link>
    </div>
  );
};

export default Item;
