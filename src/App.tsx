import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Loader from './components/loader/loader.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./routes/home/home.component'));
const About = lazy(() => import('./routes/about/about.component'));
const Collection = lazy(
  () => import('./routes/collection/collection.component')
);
const Item = lazy(() => import('./routes/item/item.component'));
const Bookmarks = lazy(() => import('./routes/bookmarks/bookmarks.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));

const App = () => {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection/:year/:season" element={<Collection />} />
          <Route
            path="/collection/:year/:season/item/:coatId"
            element={<Item />}
          />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
        <ToastContainer position="bottom-right" closeOnClick autoClose={1500} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
