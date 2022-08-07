import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Collection from './routes/collection/collection.component';
import Item from './routes/item/item.component';
import Bookmarks from './routes/bookmarks/bookmarks.component';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/item/:coatId" element={<Item />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
