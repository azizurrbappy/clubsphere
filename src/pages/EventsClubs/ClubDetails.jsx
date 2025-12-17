import React from 'react';
import {
  MapPin,
  Users,
  Globe,
  Mail,
  Facebook,
  Linkedin,
  X,
  Share2,
  MoreHorizontal,
} from 'lucide-react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useRole from '../../hooks/useRole';
import { toast } from 'react-toastify';

const ClubDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { role } = useRole();
  const axiosSecure = useAxiosSecure();

  // Fetch Data
  const {
    data: club,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['clubDetails'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/club-details/${id}`);
      return res.data;
    },
  });

  const handleMembership = async () => {
    if (role.role === 'member') {
      const membershipData = {
        userEmail: user.email,
        clubID: club._id,
        clubName: club.clubName,
        status: 'active',
        paymentID: 'N/A',
        joinedAt: new Date().toUTCString(),
      };

      const res = await axiosSecure.post('/membership', membershipData);

      if (res.status === 200) {
        return toast.error(res.data.message);
      }

      if (res.data.data.insertedId) {
        toast.success(
          `You have received a 6-month membership to the ${club.clubName}!`
        );
      }
    } else {
      toast.error(
        `${user.displayName.split(' ')[0]} you are not ClubSphere member!`
      );
    }
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="bg-base-100 min-h-screen pb-10">
      {/* Hero Section */}
      <div className="border-b border-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Banner/Logo */}
            <div className="w-full md:w-[400px] aspect-[4/3] bg-base-200 rounded-2xl overflow-hidden shadow-sm relative group">
              <img
                src={club.bannerImage}
                alt={club.clubName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Club Info */}
            <div className="flex-1 pt-2">
              {/* <div className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                <span>•</span>
                <span>677 groups</span>
                <Globe size={14} className="ml-1" />
              </div> */}

              <h1 className="text-4xl font-bold text-base-content mb-4 leading-tight">
                {club.clubName}
              </h1>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600 gap-2">
                  <MapPin size={18} />
                  <span>{club.location}</span>
                </div>
                <div className="flex items-center text-gray-600 gap-2">
                  <Users size={18} />
                  <span>183 members</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-500">
                  Share
                </span>
                <div className="flex gap-4">
                  <button className="btn btn-circle btn-sm btn-ghost text-gray-500 hover:text-blue-600">
                    <Facebook size={20} />
                  </button>
                  <button className="btn btn-circle btn-sm btn-ghost text-gray-500 hover:text-black">
                    <X size={20} />
                  </button>
                  <button className="btn btn-circle btn-sm btn-ghost text-gray-500 hover:text-blue-700">
                    <Linkedin size={20} />
                  </button>
                  <button className="btn btn-circle btn-sm btn-ghost text-gray-500 hover:text-orange-500">
                    <Share2 size={20} />
                  </button>
                  <button className="btn btn-circle btn-sm btn-ghost text-gray-500">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-base-200 sticky top-0 z-10 bg-base-100/95 backdrop-blur supports-[backdrop-filter]:bg-base-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex overflow-x-auto no-scrollbar">
              <a
                href="#"
                className="border-b-2 border-black text-black px-4 py-4 font-medium whitespace-nowrap"
              >
                About
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent text-gray-500 hover:text-black hover:border-gray-300 px-4 py-4 font-medium whitespace-nowrap"
              >
                Events
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent text-gray-500 hover:text-black hover:border-gray-300 px-4 py-4 font-medium whitespace-nowrap"
              >
                Members
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent text-gray-500 hover:text-black hover:border-gray-300 px-4 py-4 font-medium whitespace-nowrap"
              >
                Photos
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent text-gray-500 hover:text-black hover:border-gray-300 px-4 py-4 font-medium whitespace-nowrap"
              >
                Discussions
              </a>
            </div>

            <div className="hidden md:flex items-center gap-2 py-2">
              <button className="btn btn-ghost btn-circle">
                <MoreHorizontal size={20} />
              </button>
              <button
                onClick={() => handleMembership()}
                className="btn bg-[#3659e3] rounded-full px-6 normal-case text-white"
              >
                Join this club
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Join Button (Fixed Bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 px-4 py-2 z-50 backdrop-blur-2xl shadow-md">
        <button
          onClick={() => handleMembership()}
          className="btn bg-[#3659e3] w-full rounded-full text-white border-0 shadow-none"
        >
          Join this club
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column (Content) */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                What we're about
                {/* Decorative squiggly line if needed, using generic text or svg */}
              </h2>
              <div className="prose prose-sm max-w-none text-gray-600">
                <p>{club.description}</p>
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Members Widget */}
            <div className="card bg-base-100 shadow-sm border border-base-200">
              <div className="card-body p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="card-title text-lg font-bold">
                    Related Clubs{' '}
                    <span className="text-gray-500 text-base font-normal ml-1">
                      6
                    </span>
                  </h3>
                  <Link
                    to="/find/source=Clubs"
                    className="text-blue-600 text-sm font-semibold hover:underline"
                  >
                    See all
                  </Link>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {/* Member Avatars */}
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                    <div key={i} className="avatar">
                      <div className="w-10 rounded-full bg-gray-200">
                        <img
                          src={`https://i.pravatar.cc/150?img=${i + 10}`}
                          alt={`Member ${i}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetails;
