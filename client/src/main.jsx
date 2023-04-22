import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './styles/index.scss';

import { Provider } from 'react-redux';
import { store } from '@/store';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
