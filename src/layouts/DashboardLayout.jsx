import React from 'react';
import DashboardNavbar from '../pages/Navbar/DashboardNavbar';
import Footer from '../pages/Footer/Footer';

const DashboardLayout = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <DashboardNavbar></DashboardNavbar>
      <section className="flex-1"></section>
      <Footer></Footer>
    </section>
  );
};

export default DashboardLayout;
