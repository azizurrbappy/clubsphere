import React from 'react';
import Conatiner2 from '../../components/Container/Conatiner2';
import { Link } from 'react-router';
import CityCard from '../../components/CityCard/CityCard';

const PopularCities = () => {
  return (
    <Conatiner2 className="pt-20 pb-20">
      <div className="text-left">
        <h3 className="text-[#232326] text-3xl font-bold max-sm:text-2xl">
          Popular cities on Meetup
        </h3>
        <p className="text-[#464649] mt-3">
          Looking for fun things to do near you? See what ClubSphere organizers
          are planning in cities around the country.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <CityCard></CityCard>
        <CityCard></CityCard>
        <CityCard></CityCard>
        <CityCard></CityCard>
      </div>
    </Conatiner2>
  );
};

export default PopularCities;
