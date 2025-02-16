import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { GoodIndex } from '../src/principles/OCP/GoodIndex';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

describe('OCP - Good Index', () => {
    const renderComponent = () => {
        return render(
            React.createElement(GoodIndex, {
                text: 'Go Home',
                icon: <HiOutlineArrowNarrowRight />,
            })
        );
    };

    it('should render home button', () => {
        renderComponent();

        const button = screen.getByRole('button', { name: 'Go Home' });
        expect(button).toBeInTheDocument();
    });

    it('should render the correct text', () => {
        renderComponent();
        expect(screen.getByText('Go Home')).toBeInTheDocument();
    });
});
