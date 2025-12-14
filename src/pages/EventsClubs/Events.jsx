import { Video } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Events = () => {
  return (
    <>
      <Link to="/" className="max-w-fit">
        <img
          className=" rounded-3xl"
          src="https://secure.meetupstatic.com/photos/event/6/0/f/a/highres_531384826.webp?w=640"
          alt=""
        />

        <div className="mt-2 flex items-center gap-2.5">
          <p className="text-xs text-[#69696C] font-medium">
            Tue, Dec 16 · 12:30 PM
          </p>
          <button className="btn h-fit px-2 py-1 rounded-full font-medium border border-gray-300 bg-transparent">
            <Video size={10} /> <span className="text-xs">Online</span>
          </button>
        </div>

        <div>
          <h3 className="text-lg text-[#232326] font-semibold">
            How to Build AI Agents — Practical Hands-On Workshop by Educity
          </h3>
          <p className="text-xs text-[#69696C]">by Educity</p>
        </div>
      </Link>
    </>
  );
};

export default Events;
