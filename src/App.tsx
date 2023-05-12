import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import ShoppingCartProvider from './context/ShoppingCartContext';

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store/:category" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
