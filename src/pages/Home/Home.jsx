import React from 'react';
import Container from '../../components/Container/Container';
import Hero from './Hero';
import OnlineEvents from './OnlineEvents';
import JoinClubSphere from './JoinClubSphere';
import PopularCities from './PopularCities';
import HowClubSphereWork from './HowClubSphereWork';

const Home = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto lg:px-0 px-4">
        <Hero></Hero>

        {/* Upcoming Events */}
        <OnlineEvents></OnlineEvents>

        {/* Join Sphere */}
        <JoinClubSphere></JoinClubSphere>

        {/* Top Category */}
        <PopularCities></PopularCities>

        {/* How ClubSphere Works */}
        <HowClubSphereWork></HowClubSphereWork>
      </section>
    </>
  );
};

export default Home;
