import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../types/Product';

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(
                'https://fakestoreapi.com/products'
            );

            if (response.status !== 200) {
                throw new Error('Error in fetching products');
            }

            setProducts(response.data);
        };

        fetchProducts();
    }, []);

    return products;
};
