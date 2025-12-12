import React from 'react';
import { Outlet } from 'react-router';
import DashboardNavbar from '../pages/Navbar/DashboardNavbar';
import Footer from '../pages/Footer/Footer';
import Sidebar from '../pages/Dashboard/components/Sidebar';

const DashboardLayout = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <DashboardNavbar></DashboardNavbar>
      <section className="flex-1">
        <div className="bg-[#f6f7f8] min-h-screen py-8">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left Sidebar - 1 column */}
              <div className="lg:col-span-1 max-md:hidden">
                <Sidebar />
              </div>

              {/* Main Content - 3 columns */}
              <div className="lg:col-span-3">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default DashboardLayout;
