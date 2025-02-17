import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { DIPIndex } from '../src/principles/DIP/good/index';

describe('DIP - index', () => {
    const renderComponent = () => {
        return render(React.createElement(DIPIndex));
    };

    it('should render sign into account', () => {
        renderComponent();
        expect(screen.getByText('Sign into your account')).toBeInTheDocument();
    });

    it('should render the signin button', () => {
        renderComponent();

        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
