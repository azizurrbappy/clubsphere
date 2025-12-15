import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Building2, Users, Calendar, Banknote } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import StatsCard from '../../components/StatsCard';

const ClubManagerDashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // const { data: stats = {}, isLoading } = useQuery({
  //   queryKey: ['manager-stats', user?.email],
  //   queryFn: async () => {
  //     // Mocking data for now as per plan, waiting for backend endpoint
  //     // In real scenario: const res = await axiosSecure.get('/manager/stats'); return res.data;
  //     return {
  //       totalClubs: 5,
  //       totalMembers: 1250,
  //       totalEvents: 24,
  //       totalPayments: 45000
  //     };
  //   }
  // });

  const statItems = [
    {
      title: 'Managed Clubs',
      value: 0,
      icon: Building2,
      colorClass: 'text-blue-600',
      bgClass: 'bg-blue-100',
    },
    {
      title: 'Total Members',
      value: 0,
      icon: Users,
      colorClass: 'text-purple-600',
      bgClass: 'bg-purple-100',
    },
    {
      title: 'Total Events',
      value: 0,
      icon: Calendar,
      colorClass: 'text-orange-600',
      bgClass: 'bg-orange-100',
    },
    {
      title: 'Total Payments',
      value: 0,
      icon: Banknote,
      colorClass: 'text-green-600',
      bgClass: 'bg-green-100',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Hello, {user?.displayName} 👋
        </h1>
        <p className="text-gray-500 mt-1">
          Here's what's happening with your clubs today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statItems.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            colorClass={item.colorClass}
            bgClass={item.bgClass}
          />
        ))}
      </div>

      {/* Placeholder for future sections like Recent Activity or Club List */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-white shadow-sm border border-gray-100 p-6 min-h-[300px] flex items-center justify-center text-gray-400">
          <p>Recent Club Activity Chart (Coming Soon)</p>
        </div>
        <div className="card bg-white shadow-sm border border-gray-100 p-6 min-h-[300px] flex items-center justify-center text-gray-400">
          <p>Recent Member Registrations (Coming Soon)</p>
        </div>
      </div>
    </div>
  );
};

export default ClubManagerDashboard;
