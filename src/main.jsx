import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import ModalProvider from './Provider/ModalProvider.jsx';
import { Router } from './routes/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ModalProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Router}></RouterProvider>
        </QueryClientProvider>
      </ModalProvider>
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
