import React from 'react';

const Hero = () => {
  return (
    <section className="flex items-center justify-center flex-col min-h-[calc(100vh-40vh)] gap-9">
      <h1 className="md:text-4xl text-3xl font-bold text-center space-y-2.5 text-[#232326]">
        <div className="block">
          The
          <span className="inline-block -mb-2 mx-1">
            <img
              className="w-8"
              src="https://secure.meetupstatic.com/next/images/complex-icons/branded/people-1.webp?w=32"
              alt=""
            />
          </span>
          people platform.
        </div>
        <div className="block">
          Where
          <span className="inline-block -mb-2 mx-1">
            <img
              className="w-8"
              src="https://secure.meetupstatic.com/next/images/complex-icons/branded/ball.webp?w=32"
              alt=""
            />
          </span>
          interests
        </div>
        <div className="block">
          become
          <span className="inline-block -mb-2 mx-1">
            <img
              className="w-8"
              src="https://secure.meetupstatic.com/next/images/complex-icons/branded/heart.webp?w=32"
              alt=""
            />
          </span>
          friendships.
        </div>
      </h1>

      <p className="max-w-lg text-center text-[#464649]">
        Whatever your interest, from hiking and reading to networking and skill
        sharing, there are thousands of people who share it on ClubSphere.
        Events are happening every day—sign up to join the fun.
      </p>

      <button className="btn h-fit px-5 py-3 rounded-full text-base bg-[#232326] text-white ">
        Join ClubSphere
      </button>
    </section>
  );
};

export default Hero;
