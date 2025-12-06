import React from 'react';
import { Link } from 'react-router';

const JoinClubSphere = () => {
  return (
    <section className="max-w-[1000px] mx-auto h-[392px] border border-gray-300 rounded-4xl flex items-center justify-center p-10 mt-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-5 text-[#232326]">
          Join ClubSphere
        </h2>

        <p className="max-w-[540px] text-[#464649] mb-9">
          People use Meetup to meet new people, learn new things, find support,
          get out of their comfort zones, and pursue their passions, together.
          Membership is free.
        </p>

        <Link className="btn h-fit px-5 py-3 rounded-full text-base bg-[#232326] text-white ">
          Join ClubSphere
        </Link>
      </div>

      <img src="" alt="" />
    </section>
  );
};

export default JoinClubSphere;
