import React from 'react';
import useRole from '../../hooks/useRole';
import AdminDashboard from './AdminDashboard';
import ClubManagerDashboard from './ClubManagerDashboard';
import MemberDashboard from './MemberDashboard';

const Dashboard = () => {
  const { role } = useRole();
  return (
    <>
      {role.role === 'admin' && <AdminDashboard></AdminDashboard>}
      {role.role === 'clubManager' && (
        <ClubManagerDashboard></ClubManagerDashboard>
      )}
      {role.role === 'member' && <MemberDashboard></MemberDashboard>}
    </>
  );
};

export default Dashboard;
