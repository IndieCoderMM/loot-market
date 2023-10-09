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
import Layout from './Layout';
import { FormspreeProvider } from '@formspree/react';
import ShoppingCartProvider from './context/ShoppingCartContext';
import DataProvider from './context/DataContext';
import NotFound from './pages/NotFound';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<div>Not found</div>}>
      <Route index element={<Home />} />
      <Route path="store" element={<Store />} />
      <Route path="product/:slug" element={<ProductDetail />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
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
