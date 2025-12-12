import React, { useState } from 'react';
import {
  Search,
  Users,
  Monitor,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  UserCog,
  User,
} from 'lucide-react';
import useRole from '../../../hooks/useRole';
import useAuth from '../../../hooks/useAuth';
import { Navigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const SeeMembers = () => {
  const { role } = useRole();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState('');

  const {
    data: members,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['members'],
    queryFn: async () => {
      const res = await axiosSecure('/users');
      return res.data;
    },
  });

  const stats = [
    {
      title: 'Members',
      value: members?.filter(member => member.role === 'member')?.length || 0,
      isPositive: true,
      icon: Users,
      iconBg: 'bg-[#f3f4f6]',
      iconColor: 'text-[#3659e3]',
    },
    {
      title: 'Club Managers',
      value:
        members?.filter(member => member.role === 'clubManager')?.length || 0,
      isPositive: false,
      icon: UserCog,
      iconBg: 'bg-[#f3f4f6]',
      iconColor: 'text-[#3659e3]',
    },
    {
      title: 'Total Members',
      value: members?.length,
      icon: Monitor,
      iconBg: 'bg-[#f3f4f6]',
      iconColor: 'text-[#3659e3]',
    },
  ];

  const handleAction = async (giveRole, id) => {
    await axiosSecure.patch(`/user?id=${id}&role=${giveRole}`).then(res => {
      if (res.data.modifiedCount) {
        refetch();
        toast.success('Successfully role change!');
      }
    });
  };

  const filteredMember = members?.filter(member => {
    const modifiedSearchTerm = searchTerm.toLowerCase();

    if (!modifiedSearchTerm.trim()) {
      return true;
    }

    try {
      const regex = new RegExp(searchTerm.trim(), 'gi');
      return regex.test(member.name);
    } catch (e) {
      return member.name.toLowerCase().includes(modifiedSearchTerm);
    }
  });

  if (role.role !== 'admin') {
    return <Navigate to="/dashboard"></Navigate>;
  }

  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl text-left font-bold text-gray-800">
          Hello {user.displayName.split(' ')[0]} 👋,
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-sm flex items-center gap-4"
          >
            <div
              className={`p-4 rounded-full ${stat.iconBg} ${stat.iconColor}`}
            >
              <stat.icon size={32} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Customers Table Section */}
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">All Members</h2>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search"
                className="pl-10 pr-4 py-2 rounded-xl bg-gray-50 text-sm focus:outline-none focus:ring-1 focus:ring-gray-200 w-48"
              />
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl text-sm text-gray-500 cursor-pointer">
              <span>
                Short by : <b>Newest</b>
              </span>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 border-b border-gray-100 text-sm">
                <th className="pb-4 font-medium pl-2">Full Name</th>
                <th className="pb-4 font-medium">Email</th>
                <th className="pb-4 font-medium">Location</th>
                <th className="pb-4 font-medium">Role</th>
                <th className="pb-4 font-medium">Provider</th>
                <th className="pb-4 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {filteredMember?.map((member, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors last:border-none"
                >
                  <td className="py-4 pl-2 font-medium">{member.name}</td>
                  <td className="py-4">{member.email}</td>
                  <td className="py-4">{member.location}</td>
                  <td className="py-4">{member.role.toUpperCase()}</td>
                  <td className="py-4">{member.providerId}</td>
                  <td className="text-center space-x-2">
                    <div className="tooltip" data-tip="Member">
                      <button
                        onClick={() => handleAction('member', member._id)}
                        className="btn btn-soft btn-warning rounded-full h-fit p-1"
                      >
                        <User size={18} />
                      </button>
                    </div>
                    <div className="tooltip" data-tip="Club Manager">
                      <button
                        onClick={() => handleAction('clubManager', member._id)}
                        className="btn btn-soft btn-primary rounded-full h-fit p-1"
                      >
                        <User size={18} />
                      </button>
                    </div>
                    <div className="tooltip" data-tip="Admin">
                      <button
                        onClick={() => handleAction('admin', member._id)}
                        className="btn btn-soft btn-secondary rounded-full h-fit p-1"
                      >
                        <User size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          <div>Showing data 1 to 8 of 256K entries</div>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm hover:bg-indigo-700">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
              4
            </button>
            <span className="flex items-end px-1">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
              40
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeMembers;
