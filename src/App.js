import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Collection from './routes/collection/collection.component';
import Item from './routes/item/item.component';
import Bookmarks from './routes/bookmarks/bookmarks.component';
import Checkout from './routes/checkout/checkout.component';

function App() {
  return (
    <div className="container">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
