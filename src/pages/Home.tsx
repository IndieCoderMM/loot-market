import HeroBanner from '../components/HeroBanner';
import { useEffect, useState } from 'react';
import { Banner, Product, getBanners, getProducts } from '../lib/sanity.query';
import ProductCard from '../components/ProductCard';
import FooterBanner from '../components/FooterBanner';

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

      <section className="my-5">
        <h2 className="section-heading">Best Selling Products</h2>
        <p className="text-center mb-5">
          Here are some of our best selling products. Check them out before they
          are sold out!
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-5">
          {products?.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
      <div className="px-3">
        <FooterBanner banner={banners[0]} />
      </div>
    </main>
  );
}
