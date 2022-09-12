import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from './components/loader/loader.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const Home = lazy(() => import('./routes/home/home.component'));
const About = lazy(() => import('./routes/about/about.component'));
const Collection = lazy(() =>
  import('./routes/collection/collection.component')
);
const Item = lazy(() => import('./routes/item/item.component'));
const Bookmarks = lazy(() => import('./routes/bookmarks/bookmarks.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" closeOnClick autoClose={1500} />
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
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
