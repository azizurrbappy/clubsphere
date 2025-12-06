import React from 'react';
import Conatiner2 from '../../components/Container/Conatiner2';
import BlogCard from '../../components/BlogCard/BlogCard';

const Blog = () => {
  return (
    <>
      <Conatiner2 className="mt-10 mb-20">
        <div className="">
          <h3 className="text-[#232326] text-3xl font-bold max-sm:text-2xl">
            Friendships are made on ClubSphere
          </h3>

          <p className="text-[#464649] mt-3">
            Since 2002, members have used ClubSphere to make new friends, meet
            like-minded people, spend time on <br className="max-sm:hidden" />
            hobbies, and connect with locals over shared interests. Learn how.
          </p>
        </div>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
        </section>
      </Conatiner2>
    </>
  );
};

export default Blog;
