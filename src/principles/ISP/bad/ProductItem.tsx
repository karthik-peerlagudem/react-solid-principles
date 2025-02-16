import { Thumbnail } from './Thumbnail';
import { Product } from './types/Product';

interface ProductItemProps {
    product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <Thumbnail product={product} />
            <h3 className="font-bold">{product.title}</h3>
            <p className="mt-2">price: ${product.price}</p>
        </div>
    );
};
