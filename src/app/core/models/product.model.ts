export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    discountPrice?: number;
    description: string;
    imageUrl?: string;
    sizes?: number[];
    colors?: string[];
}