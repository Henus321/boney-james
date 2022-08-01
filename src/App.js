import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Collection from './routes/collection/collection.component';
import Item from './routes/item/item.component';

import './sass/container.styles.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/item" element={<Item />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
