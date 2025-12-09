import { motion } from 'framer-motion';
import { use } from 'react';
import { AuthModal } from '../../Context/AuthModal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const lineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Hero = () => {
  const { onboardingModal } = use(AuthModal);

  return (
    <motion.section
      className="flex items-center justify-center flex-col min-h-[calc(100vh-30vh)] gap-9"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="md:text-4xl text-3xl font-bold text-center space-y-2.5 text-[#232326]"
        variants={containerVariants}
      >
        <motion.div className="block" variants={lineVariants}>
          The
          <span className="inline-block -mb-2 mx-1">
            <img
              className="w-8"
              src="https://secure.meetupstatic.com/next/images/complex-icons/branded/people-1.webp?w=32"
              alt=""
            />
          </span>
          people platform.
        </motion.div>
        <motion.div className="block" variants={lineVariants}>
          Where
          <span className="inline-block -mb-2 mx-1">
            <img
              className="w-8"
              src="https://secure.meetupstatic.com/next/images/complex-icons/branded/ball.webp?w=32"
              alt=""
            />
          </span>
          interests
        </motion.div>
        <motion.div className="block" variants={lineVariants}>
          become
          <span className="inline-block -mb-2 mx-1">
            <img
              className="w-8"
              src="https://secure.meetupstatic.com/next/images/complex-icons/branded/heart.webp?w=32"
              alt=""
            />
          </span>
          friendships.
        </motion.div>
      </motion.h1>

      <motion.p
        className="max-w-xl text-center text-[#464649]"
        variants={itemVariants}
      >
        Whatever your interest, from hiking and reading to networking and skill
        sharing, there are thousands of people who share it on ClubSphere.
        Events are happening every day—sign up to join the fun.
      </motion.p>

      <motion.button
        onClick={() => onboardingModal()}
        className="btn h-fit px-5 py-3 rounded-full text-base bg-[#3659e3] text-white"
        variants={itemVariants}
        whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Join ClubSphere
      </motion.button>
    </motion.section>
  );
};

export default Hero;
