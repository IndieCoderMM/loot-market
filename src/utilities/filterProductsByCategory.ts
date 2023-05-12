interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    imgUrl: string;
}

export function filterProductsByCategory(products: Product[], category: string): Product[] {
    return products.filter((item) => item.category === category);
}