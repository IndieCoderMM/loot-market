import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import ShoppingCartProvider from './context/ShoppingCartContext';
import Footer from './components/Footer';
import Product from './pages/Product';

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store/:category" element={<Store />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
