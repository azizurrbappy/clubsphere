import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Navbar/Navbar';

const MainLayout = () => {
  return (
    <section className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar></Navbar>
      <section className="flex-1">
        <Outlet></Outlet>
      </section>
      {/* Footer */}
    </section>
  );
};

export default MainLayout;
