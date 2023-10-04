import client from './sanity.client';

export interface Banner {
  id: string;
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

export interface Product {
  id: string;
  name: string;
  price: number;
  slug: string;
  description: string;
  images: string[];
}

export const getProducts = async (): Promise<Product[]> => {
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
      "id": _id,
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

export const getProductBySlug = async (slug: string): Promise<Product> => {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug]{
      "id": _id,
      name,
      price,
      "slug": slug.current,
      description,
      "images": image[]
    }[0]`,
    { slug },
  );
};
