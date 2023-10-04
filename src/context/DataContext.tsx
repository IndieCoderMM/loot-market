import { createContext, useContext, useEffect, useState } from 'react';
import { Banner, Product, getBanners, getProducts } from '../lib/sanity.query';

type DataContext = {
  banners: Banner[];
  products: Product[];
};

const DataContext = createContext({} as DataContext);

export const useDataContext = () => {
  return useContext(DataContext);
};

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const res = await getBanners();
      setBanners(res);
    };

    const fetchProducts = async () => {
      const res = await getProducts();
      setProducts(res);
    };

    fetchBanners();
    fetchProducts();
  }, []);

  return (
    <DataContext.Provider
      value={{
        banners,
        products,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
