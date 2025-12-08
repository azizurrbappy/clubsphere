import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import ModalProvider from './Provider/ModalProvider.jsx';
import { Router } from './routes/Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider router={Router}></RouterProvider>
    </ModalProvider>
  </StrictMode>
);
