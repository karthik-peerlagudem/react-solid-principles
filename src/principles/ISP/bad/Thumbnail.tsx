import { Product } from './types/Product';

interface IThumbnailProps {
    product: Product;
}

export const Thumbnail = ({ product }: IThumbnailProps) => {
    return (
        <img src={product.image} alt={product.title} width={120} height={120} />
    );
};
