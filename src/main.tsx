
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';



import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { mainTheme } from './styles/theme';
import App from './App';

import { UserProvider } from './providers/User/UserContext';
import { ProductsProvider } from './providers/Products/ProductsContext'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>

      <ThemeProvider theme={mainTheme}>
        <UserProvider>
          <ProductsProvider>

            <App />
            <ToastContainer autoClose={2000} />

          </ProductsProvider>
        </UserProvider>
      </ThemeProvider>

    </BrowserRouter>
  </React.StrictMode>
);
