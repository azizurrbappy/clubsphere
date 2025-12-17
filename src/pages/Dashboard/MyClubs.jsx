import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Users,
  DollarSign,
  Image as ImageIcon,
  Search,
  NotebookPen,
  Trash2,
} from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import useRole from '../../hooks/useRole';
import { Navigate } from 'react-router';

const MyClubs = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClub, setEditingClub] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { role } = useRole();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Fetch Clubs
  const {
    data: clubs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['manageClubs', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/clubs?managerEmail=${user.email}`);
      return res.data;
    },
  });

  // Create Club Mutation
  const createClubMutation = useMutation({
    mutationFn: async clubData => {
      const res = await axiosSecure.post('/club', clubData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['manageClubs', user?.email]);
      toast.success('Club created successfully!');
      reset();
      setIsModalOpen(false);
    },
    onError: error => {
      toast.error(error.response?.data?.message || 'Failed to create club');
    },
  });

  // Update Club Mutation
  const updateClubMutation = useMutation({
    mutationFn: async ({ id, clubData }) => {
      const res = await axiosSecure.patch(`/club?id=${id}`, clubData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['manageClubs', user?.email]);
      toast.success('Club updated successfully!');
      setIsModalOpen(false);
      setEditingClub(false);
      reset();
    },
    onError: error => {
      toast.error(error.response?.data?.message || 'Failed to update club');
    },
  });

  // Delete Club Mutation
  const deleteClubMutation = useMutation({
    mutationFn: async id => {
      const res = await axiosSecure.delete(`/club?id=${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['manageClubs', user?.email]);
      toast.success('Club deleted successfully!');
    },
    onError: error => {
      toast.error(error.response?.data?.message || 'Failed to delete club');
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  // for search clubs
  const filteredClub = (clubs || []).filter(club => {
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

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this club?')) {
      deleteClubMutation.mutate(id);
    }
  };

  const handleSubmitClub = async data => {
    const clubData = {
      clubName: data.name,
      description: data.description,
      category: data.category,
      location: data.location,
      bannerImage: data.bannerImage,
      membershipFee:
        parseFloat(data.membershipFee) === 0
          ? 'Free'
          : parseFloat(data.membershipFee),
      status: 'pending',
      managerEmail: user.email,
      createdBy: user.displayName,
    };

    if (editingClub) {
      clubData.updatedAt = new Date().toUTCString();
      updateClubMutation.mutate({ id: editingClub._id, clubData });
    } else {
      clubData.createdAt = new Date().toUTCString();
      createClubMutation.mutate(clubData);
    }
  };

  const openModal = (club = null) => {
    if (club) {
      setValue('name', club.clubName);
      setValue('description', club.description);
      setValue('location', club.location);
      setValue('membershipFee', club.membershipFee);
      setValue('category', club.category);
      setValue('bannerImage', club.bannerImage);
      setEditingClub(club);
    } else {
      reset();
      setEditingClub(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingClub(false);
    setIsModalOpen(false);
    reset();
  };

  if (role.role !== 'clubManager') {
    return <Navigate to="/dashboard"></Navigate>;
  }
  return (
    <div className="min-h-screen">
      {/* Clubs Table */}
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">My Clubs</h2>
            <p className="text-gray-500 mt-1">
              Create, manage, and grow your clubs.
            </p>
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
            <div className="">
              <button
                onClick={() => openModal()}
                className="btn h-fit bg-[#3659e3] text-white text-sm font-medium rounded-xl py-2"
              >
                Create New Club
              </button>
            </div>
          </div>
        </div>

        {filteredClub.length === 0 ? (
          <div className="text-center py-20 bg-base-200/50 rounded-3xl border-2 border-dashed border-base-300">
            <div className="bg-base-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Users className="w-10 h-10 text-primary/50" />
            </div>
            <h3 className="text-2xl font-bold text-base-content mb-2">
              No clubs found
            </h3>
            <p className="text-base-content/60 max-w-md mx-auto mb-8">
              You haven't created any clubs yet. Get started by clicking the
              "Create New Club" button above.
            </p>
            <button
              onClick={() => openModal()}
              className="btn btn-outline btn-primary"
            >
              Create Your First Club
            </button>
          </div>
        ) : (
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
                {filteredClub?.map((club, index) => (
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
                      <div>
                        {club.membershipFee === 'Free' ? (
                          <span class="badge badge-soft badge-success rounded-full text-xs">
                            Free
                          </span>
                        ) : (
                          <span>${club.membershipFee}</span>
                        )}
                      </div>
                    </td>
                    <td className="text-center space-x-3">
                      <div className="tooltip" data-tip="Edit">
                        <button
                          onClick={() => openModal(club)}
                          className="btn btn-soft btn-warning rounded-full h-fit p-2"
                        >
                          <NotebookPen size={18} />
                        </button>
                      </div>
                      <div className="tooltip" data-tip="Delete">
                        <button
                          onClick={() => handleDelete(club._id)}
                          className="btn btn-soft btn-error rounded-full h-fit p-2"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-base-100 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="px-6 py-4 border-b border-base-200 flex justify-between items-center bg-base-100/50">
                <h3 className="text-2xl font-bold text-primary">
                  {editingClub ? 'Edit Club Details' : 'Create New Club'}
                </h3>
              </div>

              <div className="overflow-y-auto p-6 custom-scrollbar">
                <form
                  onSubmit={handleSubmit(handleSubmitClub)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control w-full">
                      <label className="label font-medium">Club Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Hiking Enthusiasts"
                        className={`input input-bordered w-full focus:input-primary ${
                          errors.name ? 'input-error' : ''
                        }`}
                        {...register('name', {
                          required: 'Club name is required',
                        })}
                      />
                      {errors.name && (
                        <span className="text-error text-sm mt-1">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    <div className="form-control w-full">
                      <label className="label font-medium">Category</label>
                      <select
                        className={`select select-bordered w-full focus:select-primary ${
                          errors.category ? 'select-error' : ''
                        }`}
                        {...register('category', {
                          required: 'Category is required',
                        })}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        <option value="Sports">Sports</option>
                        <option value="Technology">Technology</option>
                        <option value="Arts & Culture">Arts & Culture</option>
                        <option value="Health & Wellness">
                          Health & Wellness
                        </option>
                        <option value="Social">Social</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.category && (
                        <span className="text-error text-sm mt-1">
                          {errors.category.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-control w-full">
                    <label className="label font-medium">Description</label>
                    <textarea
                      placeholder="Tell potential members what your club is about..."
                      className={`textarea textarea-bordered h-24 w-full focus:textarea-primary ${
                        errors.description ? 'textarea-error' : ''
                      }`}
                      {...register('description', {
                        required: 'Description is required',
                      })}
                    ></textarea>
                    {errors.description && (
                      <span className="text-error text-sm mt-1">
                        {errors.description.message}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control w-full">
                      <label className="label font-medium">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-base-content/50" />
                        <input
                          type="text"
                          placeholder="City, or 'Online'"
                          className={`input input-bordered w-full focus:input-primary ${
                            errors.location ? 'input-error' : ''
                          }`}
                          {...register('location', {
                            required: 'Location is required',
                          })}
                        />
                      </div>
                      {errors.location && (
                        <span className="text-error text-sm mt-1">
                          {errors.location.message}
                        </span>
                      )}
                    </div>

                    <div className="form-control w-full">
                      <label className="label font-medium">
                        Membership Fee ($/Year)
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 w-5 h-5 text-base-content/50" />
                        <input
                          type="text"
                          placeholder="0.00"
                          className={`input input-bordered w-full focus:input-primary ${
                            errors.membershipFee ? 'input-error' : ''
                          }`}
                          {...register('membershipFee', {
                            required: 'Fee is required',
                            min: {
                              value: 0,
                              message: 'Fee cannot be negative',
                            },
                          })}
                        />
                      </div>
                      {errors.membershipFee && (
                        <span className="text-error text-sm mt-1">
                          {errors.membershipFee.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-control w-full">
                    <label className="label font-medium">
                      Banner Image URL
                    </label>
                    <div className="relative">
                      <ImageIcon className="absolute left-3 top-3 w-5 h-5 text-base-content/50" />
                      <input
                        type="url"
                        placeholder="https://example.com/image.jpg"
                        className={`input input-bordered w-full focus:input-primary ${
                          errors.bannerImage ? 'input-error' : ''
                        }`}
                        {...register('bannerImage', {
                          required: 'Image URL is required',
                        })}
                      />
                    </div>
                    {errors.bannerImage && (
                      <span className="text-error text-sm mt-1">
                        {errors.bannerImage.message}
                      </span>
                    )}
                  </div>

                  <div className="pt-4 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => closeModal()}
                      className="btn bg-transparent border-none shadow-none"
                    >
                      Cancel
                    </button>
                    {editingClub ? (
                      <button
                        type="submit"
                        className="btn bg-[#3659e3] text-white px-8 rounded-full"
                      >
                        Edit Club
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn bg-[#3659e3] text-white px-8 rounded-full"
                      >
                        Create Club
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyClubs;
