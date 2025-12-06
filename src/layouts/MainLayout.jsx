import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Navbar/Navbar';
import Footer from '../pages/Footer/Footer';

const MainLayout = () => {
  return (
    <section className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar></Navbar>
      <section className="flex-1">
        <Outlet></Outlet>
      </section>
      {/* Footer */}
      <Footer></Footer>
    </section>
  );
};

export default MainLayout;
