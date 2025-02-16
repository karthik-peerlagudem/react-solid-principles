import { useState } from 'react';
import { Product } from '../types/Product';

export const useProductFilter = (products: Product[]) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [priceValue, setPriceValue] = useState<number | null>(null);

    const filteredProducts = products.filter((product) => {
        const searchFilter = product.title
            .toLowerCase()
            .includes(searchValue.toLowerCase());

        const priceFilter = priceValue === null || product.price <= priceValue;

        return searchFilter && priceFilter;
    });

    return {
        filteredProducts,
        searchValue,
        setSearchValue,
        priceValue,
        setPriceValue,
    };
};
