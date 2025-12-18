import { motion } from 'framer-motion';
import { use } from 'react';
import { Link } from 'react-router';
import { AuthModal } from '../../Context/AuthModal';

const JoinClubSphere = () => {
  const { onboardingModal } = use(AuthModal);

  return (
    <motion.section
      className="max-w-[1000px] mx-auto h-[392px] border border-gray-300 rounded-4xl flex items-center justify-center p-10 mt-8 mb-30"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="text-center">
        <motion.h2
          className="text-3xl font-bold mb-5 text-[#232326]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join ClubSphere
        </motion.h2>

        <motion.p
          className="max-w-[540px] text-[#464649] mb-9"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          People use ClubSphere to meet new people, learn new things, find
          support, get out of their comfort zones, and pursue their passions,
          together. Membership is free.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => onboardingModal()}
              className="btn h-fit px-5 py-3 rounded-full text-base bg-[#3659e3] text-white"
            >
              Join ClubSphere
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default JoinClubSphere;
