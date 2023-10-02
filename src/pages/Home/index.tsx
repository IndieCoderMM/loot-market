import HeroBanner from './HeroBanner';
import { useEffect, useState } from 'react';
import {
  Banner,
  Product,
  getBanners,
  getProducts,
} from '../../lib/sanity.query';
import ProductCard from '../../components/ProductCard';
import HotsaleBanner from './HotsaleBanner';
import Services from './Services';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
    getBanners().then((res) => {
      setBanners(res);
    });
  }, []);
  return (
    <main>
      <HeroBanner banner={banners[1]} />

      <Services />

      <section className="my-5">
        <h2 className="section-heading">Best Selling Products</h2>
        <p className="text-center mb-5">
          Here are some of our best selling products. Check them out before they
          are sold out!
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-5">
          {products?.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} imageIndex={3} />
            ))}
        </div>
      </section>

      <HotsaleBanner banner={banners[0]} />
      <section className="my-5">
        <h2 className="section-heading">Latest Products</h2>
        <p className="text-center mb-5">
          These latest products will elevate your gaming experience to the next
          level.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-5">
          {products?.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} imageIndex={1} />
            ))}
        </div>
      </section>
    </main>
  );
}
