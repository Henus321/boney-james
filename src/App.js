import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './routes/home/home.component';
import Contacts from './routes/contacts/contacts.component';
import Collection from './routes/collection/collection.component';
import Item from './routes/item/item.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/item" element={<Item />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
