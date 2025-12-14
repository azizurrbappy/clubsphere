import React, { useState } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import useRole from '../../../hooks/useRole';
import useAuth from '../../../hooks/useAuth';
import { Navigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Transactions = () => {
  const { role } = useRole();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState('');

  const { data: payments, isLoading } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await axiosSecure('/payments');
      return res.data;
    },
  });

  const filteredPayments = payments?.filter(payment => {
    const modifiedSearchTerm = searchTerm.toLowerCase();

    if (!modifiedSearchTerm.trim()) {
      return true;
    }

    // Search by user email or club name
    return (
      payment.userEmail?.toLowerCase().includes(modifiedSearchTerm) ||
      payment.clubName?.toLowerCase().includes(modifiedSearchTerm)
    );
  });

  if (role.role !== 'admin') {
    return <Navigate to="/dashboard"></Navigate>;
  }

  return (
    <div className="min-h-screen font-sans">
      {/* Transactions Table Section */}
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Transactions</h2>
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
                placeholder="Search Email or Club"
                className="pl-10 pr-4 py-2 rounded-xl bg-gray-50 text-sm focus:outline-none focus:ring-1 focus:ring-gray-200 w-56"
              />
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl text-sm text-gray-500 cursor-pointer">
              <span>
                Sort by : <b>Newest</b>
              </span>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 border-b border-gray-100 text-sm">
                <th className="pb-4 font-medium pl-2">User Email</th>
                <th className="pb-4 font-medium">Amount</th>
                <th className="pb-4 font-medium">Type</th>
                <th className="pb-4 font-medium">Club Name</th>
                <th className="pb-4 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors last:border-none">
                <td className="py-4 pl-2 font-medium"></td>
                <td className="py-4">$</td>
                <td className="py-4"></td>
                <td className="py-4"></td>
                <td className="py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          <div>Showing data ...</div>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm hover:bg-indigo-700">
              1
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

export default Transactions;
