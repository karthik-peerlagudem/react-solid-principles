export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: Rating;
}

export interface Rating {
    rate: number;
    count: number;
}
