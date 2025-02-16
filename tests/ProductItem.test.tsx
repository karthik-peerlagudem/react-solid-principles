import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// import { Product } from '../src/principles/SRP/types/Product';
import { ProductItem } from '../src/principles/SRP/ProductItem';

describe('ProductItem', () => {
    const mockedProduct = {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
            'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
            rate: 3.9,
            count: 120,
        },
    };

    const renderComponent = () => {
        return render(
            React.createElement(ProductItem, {
                product: mockedProduct,
            })
        );
    };

    it('renders the product', () => {
        renderComponent();

        expect(
            screen.getByText(
                'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
            )
        ).toBeInTheDocument();
    });
});
