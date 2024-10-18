export interface Product {
    category: string;
    type: ProductType[];
}

export interface ProductType {
    id: number;
    image: string;
    name: string;
    price: string;
    weight: string;
}