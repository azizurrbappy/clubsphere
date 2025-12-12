import React from 'react';
import Sidebar from './components/Sidebar';
import useRole from '../../hooks/useRole';
import AdminDashboard from './AdminDashboard';

const Dashboard = () => {
  const { role } = useRole();
  return (
    <div className="bg-[#f6f7f8] min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - 1 column */}
          <div className="lg:col-span-1 max-md:hidden">
            <Sidebar />
          </div>

          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3">
            {role.role === 'admin' && <AdminDashboard></AdminDashboard>}
            {role.role === 'clubManager' && (
              <ClubManagerDashboard></ClubManagerDashboard>
            )}
            {role.role === 'member' && <MemberDashboard></MemberDashboard>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
