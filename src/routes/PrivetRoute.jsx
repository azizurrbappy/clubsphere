import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <section className="mt-20">
        <div className="w-fit mx-auto">
          <span className="loading loading-dots loading-xl mx-auto text-[#b9b9b9]"></span>
        </div>
        <h2 className="text-center text-xl font-bold text-[#232326]">
          In progress...
        </h2>
      </section>
    );
  }

  if (!user) {
    return <Navigate to="/" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivetRoute;
