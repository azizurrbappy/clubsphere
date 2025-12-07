import { motion } from 'framer-motion';
import Conatiner2 from '../../components/Container/Conatiner2';
import { Link } from 'react-router';
import EventCard from '../../components/Event/EventCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

const OnlineEvents = () => {
  return (
    <Conatiner2 className="8mt-8 mb-30">
      <motion.div
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-[#232326] text-3xl font-bold max-sm:text-2xl">
          Upcoming online events
        </h3>
        <Link
          to=""
          className="text-[#7661D2] font-semibold hover:underline max-sm:hidden"
        >
          See all events
        </Link>
      </motion.div>

      <motion.div
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <EventCard />
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <EventCard />
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <EventCard />
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <EventCard />
        </motion.div>
      </motion.div>
    </Conatiner2>
  );
};

export default OnlineEvents;
