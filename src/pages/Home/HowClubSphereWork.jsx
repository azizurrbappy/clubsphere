import { motion } from 'framer-motion';
import { Link } from 'react-router';
import Conatiner2 from '../../components/Container/Conatiner2';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const HowClubSphereWork = () => {
  return (
    <Conatiner2 className="mt-10 mb-30">
      <motion.div
        className="text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-[#232326] text-3xl font-bold max-sm:text-2xl text-center">
          How ClubSphere Work
        </h3>
      </motion.div>

      <motion.section
        className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div
          className="flex items-start gap-5 border border-gray-200 rounded-3xl p-5"
          variants={cardVariants}
          whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <img
              className="w-11"
              src="https://secure.meetupstatic.com/next/images/complex-icons/branded/search.webp?w=48"
              alt=""
            />
          </div>
          <div>
            <h4 className="text-[#232326] font-semibold">
              Discover events and clubs
            </h4>
            <p className="text-[#464649] text-sm">
              See who's hosting local events for all the things you love
            </p>
            <Link
              to=""
              className="text-[#3659e3] font-medium hover:underline max-sm:hidden text-sm"
            >
              See all events
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="flex items-start gap-5 border border-gray-200 rounded-3xl p-5"
          variants={cardVariants}
          whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
          transition={{ duration: 0.3 }}
        >
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
        </motion.div>
        <motion.div
          className="flex items-start gap-5 border border-gray-200 rounded-3xl p-5"
          variants={cardVariants}
          whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
          transition={{ duration: 0.3 }}
        >
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
              Create your own ClubSphere clubs, and draw from a community of
              millions
            </p>
            <Link
              to=""
              className="text-[#3659e3] font-medium hover:underline max-sm:hidden text-sm"
            >
              Start Group
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </Conatiner2>
  );
};

export default HowClubSphereWork;
