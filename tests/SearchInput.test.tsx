import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Search } from '../src/principles/LSP/good/Search';

describe('LSP', () => {
    const renderComponent = () => {
        return render(
            React.createElement(Search, {
                isLarge: true,
            })
        );
    };

    it('should render the input element', () => {
        renderComponent();

        expect(screen.getAllByRole('textbox')).toHaveLength(2);
    });

    it('should find specific input by placeholder', () => {
        renderComponent();
        const searchInput = screen.getByPlaceholderText(
            'search for the right one..'
        );

        expect(searchInput).toBeInTheDocument();
    });
});
