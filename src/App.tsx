import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Category from './pages/Category';
import Layout from './Layout';
import { FormspreeProvider } from '@formspree/react';
import ShoppingCartProvider from './context/ShoppingCartContext';
import DataProvider from './context/DataContext';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<div>Not found</div>}>
      <Route index element={<Home />} />
      <Route path="store" element={<Store />} />
      <Route path="store/:category" element={<Category />} />
      <Route path="product/:slug" element={<ProductDetail />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<div>Not found</div>} />
    </Route>,
  ),
);

const App = () => {
  return (
    <FormspreeProvider project="2206426162844924944">
      <DataProvider>
        <ShoppingCartProvider>
          <RouterProvider router={Router} />
        </ShoppingCartProvider>
      </DataProvider>
    </FormspreeProvider>
  );
};

export default App;
