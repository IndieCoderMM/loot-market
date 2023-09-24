interface Product {
    id: number;
    name: string;
    price: number;
    info: string;
    category: string;
    imgUrl: string;
}

export function filterProductsByCategory(products: Product[], category: string): Product[] {
    return products.filter((item) => item.category === category);
}