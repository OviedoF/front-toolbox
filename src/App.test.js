import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import App from './App';

describe('App component', () => {
    it('debería renderizar el header correctamente', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(screen.getByText('React Test App')).toBeInTheDocument();
    });

    it('debería mostrar el selector de archivos', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(await screen.findByLabelText('Filtrar por archivo')).toBeInTheDocument();
    });
});