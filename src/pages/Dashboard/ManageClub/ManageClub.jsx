import React, { useState } from 'react';
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Check,
  X,
  Clock,
} from 'lucide-react';
import useRole from '../../../hooks/useRole';
import useAuth from '../../../hooks/useAuth';
import { Navigate } from 'react-router';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const ManageClub = () => {
  const { role } = useRole();
  const { user, setLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch Data
  const {
    data: clubs = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['manageClubs'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/clubs`);
      return res.data;
    },
  });

  // Approved Mutation
  const approvedClubMutation = useMutation({
    mutationFn: async ({ id, status }) => {
      const res = await axiosSecure.patch(
        `/club-status?id=${id}&status=${status}`
      );
      return res.data;
    },
    onSuccess: () => {
      refetch();
      toast.success('Club approved successfully!');
    },
    onError: error => {
      toast.error(error.response?.data?.message || 'Failed to approved club');
    },
  });

  // Pending Mutation
  const pendingClubMutation = useMutation({
    mutationFn: async ({ id, status }) => {
      const res = await axiosSecure.patch(
        `/club-status?id=${id}&status=${status}`
      );
      return res.data;
    },
    onSuccess: () => {
      refetch();
      toast.success('Club pending successfully!');
    },
    onError: error => {
      toast.error(error.response?.data?.message || 'Failed to pending club');
    },
  });

  // Rejected Mutation
  const rejectedClubMutation = useMutation({
    mutationFn: async ({ id, status }) => {
      const res = await axiosSecure.patch(
        `/club-status?id=${id}&status=${status}`
      );
      return res.data;
    },
    onSuccess: () => {
      refetch();
      toast.success('Club rejected successfully!');
    },
    onError: error => {
      toast.error(error.response?.data?.message || 'Failed to rejected club');
    },
  });

  // For search clubs
  const filteredClubs = clubs.filter(club => {
    const modifiedSearchTerm = searchTerm.toLowerCase();

    if (!modifiedSearchTerm.trim()) {
      return true;
    }

    try {
      const regex = new RegExp(searchTerm.trim(), 'gi');
      return regex.test(club.clubName);
    } catch (e) {
      return club.clubName.toLowerCase().includes(modifiedSearchTerm);
    }
  });

  // For Action Btn
  const tableAction = (clubID, status = null) => {
    if (status === 'approved') {
      approvedClubMutation.mutate({ id: clubID, status: status });
    }
    if (status === 'pending') {
      pendingClubMutation.mutate({ id: clubID, status: status });
    }
    if (status === 'rejected') {
      rejectedClubMutation.mutate({ id: clubID, status: status });
    }
  };

  if (role.role !== 'admin') {
    return <Navigate to="/dashboard"></Navigate>;
  }

  if (isLoading) {
    setLoading(true);
    return setLoading(false);
  }

  return (
    <div className="min-h-screen font-sans">
      {/* Clubs Table Section */}
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Manage Clubs</h2>
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
                placeholder="Search Club"
                className="pl-10 pr-4 py-2 rounded-xl bg-gray-50 text-sm focus:outline-none focus:ring-1 focus:ring-gray-200 w-48"
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
                <th className="pb-4 font-medium pl-2">Club Name</th>
                <th className="pb-4 font-medium">Manager Email</th>
                <th className="pb-4 font-medium">Status</th>
                <th className="pb-4 font-medium">Membership Fee</th>
                <th className="pb-4 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {filteredClubs.map((club, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors last:border-none"
                >
                  <td className="py-4 pl-2 font-medium">{club.clubName}</td>
                  <td className="py-4">{club.managerEmail}</td>
                  <td className="py-4">
                    {club.status === 'approved' && (
                      <span className="badge badge-soft badge-success rounded-full text-xs">
                        {club.status.toUpperCase()}
                      </span>
                    )}
                    {club.status === 'pending' && (
                      <span className="badge badge-soft badge-warning rounded-full text-xs">
                        {club.status.toUpperCase()}
                      </span>
                    )}
                    {club.status === 'rejected' && (
                      <span className="badge badge-soft badge-error rounded-full text-xs">
                        {club.status.toUpperCase()}
                      </span>
                    )}
                  </td>
                  <td className="py-4">
                    {club.membershipFee === 'Free' ? (
                      <span class="badge badge-soft badge-success rounded-full text-xs">
                        Free
                      </span>
                    ) : (
                      <span>${club.membershipFee}</span>
                    )}
                  </td>
                  <td className="text-center space-x-2">
                    {(club.status === 'pending' ||
                      club.status === 'rejected') && (
                      <div className="tooltip" data-tip="Approve">
                        <button
                          onClick={() => tableAction(club._id, 'approved')}
                          className="btn btn-soft btn-success rounded-full h-fit p-2"
                        >
                          <Check size={18} />
                        </button>
                      </div>
                    )}

                    {(club.status === 'approved' ||
                      club.status === 'rejected') && (
                      <div className="tooltip" data-tip="Mark as Pending">
                        <button
                          onClick={() => tableAction(club._id, 'pending')}
                          className="btn btn-soft btn-warning rounded-full h-fit p-2"
                        >
                          <Clock size={18} />
                        </button>
                      </div>
                    )}

                    {(club.status === 'pending' ||
                      club.status === 'approved') && (
                      <div className="tooltip" data-tip="Reject">
                        <button
                          onClick={() => tableAction(club._id, 'rejected')}
                          className="btn btn-soft btn-error rounded-full h-fit p-2"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClub;
