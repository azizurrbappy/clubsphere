import React from 'react';
import Conatiner2 from '../../components/Container/Conatiner2';
import { Link } from 'react-router';
import EventCard from '../../components/Event/EventCard';

const OnlineEvents = () => {
  return (
    <>
      <Conatiner2 className="pt-8 pb-20">
        <div className="flex justify-between items-center">
          <h3 className="text-[#232326] text-3xl font-bold max-sm:text-2xl">
            Upcoming online events
          </h3>
          <Link
            to=""
            className="text-[#7661D2] font-semibold hover:underline max-sm:hidden"
          >
            See all events
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
        </div>
      </Conatiner2>
    </>
  );
};

export default OnlineEvents;
