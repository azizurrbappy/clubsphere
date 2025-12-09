import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import ModalProvider from './Provider/ModalProvider.jsx';
import { Router } from './routes/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ModalProvider>
        <RouterProvider router={Router}></RouterProvider>
      </ModalProvider>
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
