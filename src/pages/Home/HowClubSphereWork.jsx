import React from 'react';
import { Link } from 'react-router';
import Conatiner2 from '../../components/Container/Conatiner2';

const HowClubSphereWork = () => {
  return (
    <>
      <Conatiner2 className="mt-10 mb-20">
        <div className="text-left">
          <h3 className="text-[#232326] text-3xl font-bold max-sm:text-2xl text-center">
            How ClubSphere Work
          </h3>
        </div>

        <section className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex items-start gap-5 border border-gray-200 rounded-3xl p-5">
            <div>
              <img
                className="w-11"
                src="https://secure.meetupstatic.com/next/images/complex-icons/branded/search.webp?w=48"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-[#232326] font-semibold">
                Discover events and groups
              </h4>
              <p className="text-[#464649] text-sm">
                See who's hosting local events for all the things you love
              </p>
              <Link
                to=""
                className="text-[#7661D2] font-medium hover:underline max-sm:hidden text-sm"
              >
                See all events
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-5 border border-gray-200 rounded-3xl p-5">
            <div>
              <img
                className="w-11"
                src="https://secure.meetupstatic.com/next/images/complex-icons/branded/people-2.webp?w=48"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-[#232326] font-semibold">Find your people</h4>
              <p className="text-[#464649] text-sm">
                Connect over shared interests, and enjoy meaningful experiences.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 border border-gray-200 rounded-3xl p-5">
            <div>
              <img
                className="w-11"
                src="https://secure.meetupstatic.com/next/images/complex-icons/branded/sparkle.webp?w=48"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-[#232326] font-semibold">
                Start a group to host events
              </h4>
              <p className="text-[#464649] text-sm">
                Create your own Meetup group, and draw from a community of
                millions
              </p>
              <Link
                to=""
                className="text-[#7661D2] font-medium hover:underline max-sm:hidden text-sm"
              >
                Start Group
              </Link>
            </div>
          </div>
        </section>
      </Conatiner2>
    </>
  );
};

export default HowClubSphereWork;
