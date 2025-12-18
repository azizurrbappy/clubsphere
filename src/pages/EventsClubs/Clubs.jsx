import React from 'react';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Video } from 'lucide-react';

const Clubs = ({ searchTermClub, setSearchTermClub, category, sort }) => {
  const { user, setLoading } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch Data
  const {
    data: clubs,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['clubs', category, sort],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/clubs?status=approved&category=${category}&sort=${sort}`
      );
      return res.data;
    },
  });

  // For search
  const filteredClub = (clubs || []).filter(club => {
    const modifiedSearchTerm = searchTermClub.toLowerCase();

    if (!modifiedSearchTerm.trim()) {
      return true;
    }

    try {
      const regex = new RegExp(searchTermClub.trim(), 'gi');
      return regex.test(club.clubName);
    } catch (e) {
      return club.clubName.toLowerCase().includes(modifiedSearchTerm);
    }
  });

  if (isLoading) {
    return (
      <section className="mt-20 col-span-full">
        <div className="w-fit mx-auto">
          <span className="loading loading-dots loading-xl mx-auto text-[#b9b9b9]"></span>
        </div>
        <h2 className="text-center text-xl font-bold text-[#232326]">
          In progress...
        </h2>
      </section>
    );
  }

  return (
    <>
      {!isLoading && (
        <>
          {filteredClub.map((club, index) => (
            <Link key={index} to={`/club/${club._id}`} className="max-w-fit">
              <img className=" rounded-3xl" src={club.bannerImage} alt="" />

              <div className="mt-2 flex items-center gap-2.5">
                <p className="text-xs text-[#69696C] font-medium">
                  {club.createdAt}
                </p>
                <button className="btn h-fit px-2 py-1 rounded-full font-medium border border-gray-300 bg-transparent">
                  <Video size={10} />{' '}
                  <span className="text-xs">{club.location}</span>
                </button>
              </div>

              <div>
                <h3 className="text-lg text-[#232326] font-semibold">
                  {club.clubName}
                </h3>
                <p className="text-xs text-[#69696C]">by {club.createdBy}</p>
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default Clubs;
