import client from './sanity.client';

export interface Banner {
  _id: string;
  image: string;
  buttonText: string;
  product: string;
  desc: string;
  smallText: string;
  midText: string;
  largeText1: string;
  largeText2: string;
  discount: string;
  saleTime: string;
}

export const getProducts = async () => {
  return client.fetch(
    `*[_type == "product"]{
      "id": _id,
      name,
      price,
      "slug": slug.current,
      description,
      "images": image[]
    }`,
  );
};

export const getBanners = async (): Promise<Banner[]> => {
  return client.fetch(
    `*[_type == "banner"] {
      _id,
      image,
      buttonText,
      product,
      desc,
      smallText,
      midText,
      largeText1,
      largeText2,
      discount,
      saleTime
    }`,
  );
};
