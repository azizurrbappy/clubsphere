import React from 'react';
import { Outlet } from 'react-router';
import DashboardNavbar from '../pages/Navbar/DashboardNavbar';
import Footer from '../pages/Footer/Footer';

const DashboardLayout = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <DashboardNavbar></DashboardNavbar>
      <section className="flex-1">
        <Outlet />
      </section>
      <Footer></Footer>
    </section>
  );
};

export default DashboardLayout;
