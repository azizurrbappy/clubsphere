import React from 'react';
import { Link } from 'react-router';

const BlogCard = () => {
  return (
    <Link to="/" className="max-w-fit">
      <img
        className=" rounded-3xl"
        src="https://secure.meetupstatic.com/photos/event/6/0/f/a/highres_531384826.webp?w=640"
        alt=""
      />

      <div className="mt-4">
        <h3 className="text-lg text-[#232326] font-semibold">
          How to Build AI Agents — Practical Hands-On Workshop by Educity
        </h3>
        <p className="text-sm text-[#69696C] my-1.5">
          New Jersey-based writer and college student Brianna Stryker wanted to
          meet friends in her hometown. Learn how she used Meetup to make
          connections by joining a Girls Night Out Meetup group.
        </p>
        <Link
          to=""
          className="text-[#7661D2] font-medium hover:underline max-sm:hidden text-sm"
        >
          Read More
        </Link>
      </div>
    </Link>
  );
};

export default BlogCard;
