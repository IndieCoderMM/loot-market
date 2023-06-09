import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import ShoppingCartProvider from './context/ShoppingCartContext';
import Footer from './components/Footer';
import Product from './pages/Product';
import Category from './pages/Category';
import { FormspreeProvider } from '@formspree/react';

function App() {
  return (
    <>
      <FormspreeProvider project="2206426162844924944">
        <ShoppingCartProvider>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/store/:category" element={<Category />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </ShoppingCartProvider>
      </FormspreeProvider>
    </>
  );
}

export default App;
