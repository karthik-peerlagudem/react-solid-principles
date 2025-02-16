import axios from 'axios';
import { useEffect, useState } from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: Rating;
}

interface Rating {
    rate: number;
    count: string;
}

export const BadProductList = () => {
    const [products, SetProducts] = useState<Product[]>([]);
    const [textSearch, setTextSearch] = useState<string>('');
    const [priceSearch, setPriceSearch] = useState<number | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(
                'https://fakestoreapi.com/products'
            );

            if (response.status != 200) {
                throw new Error('Error in fetching products');
            }

            const data = response.data;
            SetProducts(data);
        };

        fetchProducts();
    }, []);

    const filtertedProducts = products.filter((product) => {
        const textSearchMatches = product.title
            .toLowerCase()
            .includes(textSearch.toLowerCase());
        const priceSearchMatches =
            priceSearch === null || product.price <= priceSearch;

        return textSearchMatches && priceSearchMatches;
    });

    return (
        <>
            <div className="flex justify-center items-center gap-2">
                <p>Search</p>
                <input
                    className="border p-2 rounded px-2 w-1/4"
                    placeholder="enter product name"
                    type="text"
                    value={textSearch}
                    onChange={(e) => setTextSearch(e.target.value)}
                />
                <input
                    className="border p-2 rounded px-2 w-1/4"
                    placeholder="enter price name"
                    type="number"
                    value={priceSearch ?? ''}
                    onChange={(e) =>
                        setPriceSearch(
                            e.target.value ? Number(e.target.value) : null
                        )
                    }
                />
            </div>
            {/* product List */}
            <div className="flex flex-col items-start">
                <h2 className="float-left mb-4 text-4xl">Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {filtertedProducts.length > 0 ? (
                        filtertedProducts.map((product) => {
                            return (
                                <div
                                    key={product.id}
                                    className="flex flex-col justify-center items-center gap-2"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        width={120}
                                        height={120}
                                    />
                                    <h3 className="font-bold">
                                        {product.title}
                                    </h3>
                                    <p className="mt-2">
                                        price: ${product.price}
                                    </p>
                                </div>
                            );
                        })
                    ) : (
                        <p>No Products found</p>
                    )}
                </div>
            </div>
        </>
    );
};
