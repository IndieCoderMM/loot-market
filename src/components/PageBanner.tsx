import Image from 'react-bootstrap/Image';
import { useDataContext } from '../context/DataContext';
import { urlFor } from '../lib/sanity.client';

const PageBanner = () => {
  const { banners } = useDataContext();

  const { largeText1: title, desc, image, product } = banners[2];
  return (
    <div
      className="overflow-hidden w-100 position-relative bg-black"
      style={{
        height: '40vh',
        maxHeight: '400px',
      }}
    >
      <Image
        className="h-auto w-100 object-fit-cover object-position-center"
        src={urlFor(image).url()}
        alt={product}
      />
      <div className="banner-text-box text-center p-1 p-sm-3">
        <h1 className="text-white fw-bold">{title}</h1>
        <p className="text-white">{desc}</p>
      </div>
    </div>
  );
};

export default PageBanner;
