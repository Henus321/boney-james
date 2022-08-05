import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../firebase.config';
import { collection, getDocs, query } from 'firebase/firestore';
import { CollectionContext } from '../../contexts/collection.context';

import { FaHeart } from 'react-icons/fa';
import './collection.styles.scss';

const Collection = () => {
  const { setItems, collections } = useContext(CollectionContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const collectionRef = collection(db, 'collections');
        const q = query(collectionRef);

        const querySnapshop = await getDocs(q);
        const data = querySnapshop.docs.map((docSnapshot) =>
          docSnapshot.data()
        );
        setItems(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCollections();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="collection">
      <span className="collection__menu">
        <Link to="/">На главную</Link>
        <span> - </span>
        <span>Весна</span>
      </span>
      <h2 className="collection__title">Коллекция женских пальто - 2022</h2>

      <div className="collection__body">
        {collections.length > 0 &&
          collections.map((coat) => (
            <div
              onClick={() => {
                navigate(`/collection/item/${coat.id}`);
              }}
              className="collection__item"
              key={coat.id}
            >
              <img
                className="collection__image"
                src={coat.mainPhotoUrl}
                alt={coat.name}
              />
              <span className="collection__span">{coat.name}</span>
              <span className="collection__span">{coat.price}&#8381;</span>
              <div className="collection__color-circles">
                <div className="color color--1"></div>
                <div className="color color--2"></div>
                <div className="color color--3"></div>
              </div>
              <FaHeart className="collection__icon" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Collection;
