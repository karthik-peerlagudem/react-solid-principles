import { Filter } from './Filter';
import { useProductFilter } from './hooks/useProductFilter';
import { useProducts } from './hooks/useProducts';
import { ProductItem } from './ProductItem';

export const ProductList = () => {
    const products = useProducts();
    const {
        filteredProducts,
        searchValue,
        setSearchValue,
        priceValue,
        setPriceValue,
    } = useProductFilter(products);

    return (
        <>
            <Filter
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                priceValue={priceValue}
                setPriceValue={setPriceValue}
            />
            <div className="flex flex-col items-start">
                <h2 className="float-left mb-4 text-4xl">Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {filteredProducts.map((product) => {
                        return (
                            <ProductItem key={product.id} product={product} />
                        );
                    })}
                </div>
            </div>
        </>
    );
};
