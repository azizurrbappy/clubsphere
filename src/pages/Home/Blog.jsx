import { motion } from 'framer-motion';
import Conatiner2 from '../../components/Container/Conatiner2';
import BlogCard from '../../components/BlogCard/BlogCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Blog = () => {
  return (
    <Conatiner2 className="mt-8 mb-30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-[#232326] text-3xl font-bold max-sm:text-2xl">
          Friendships are made on ClubSphere
        </h3>

        <p className="text-[#464649] mt-3">
          Since 2002, members have used ClubSphere to make new friends, meet
          like-minded people, spend time on <br className="max-sm:hidden" />
          hobbies, and connect with locals over shared interests. Learn how.
        </p>
      </motion.div>

      <motion.section
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div variants={cardVariants} whileHover={{ scale: 1.02 }}>
          <BlogCard />
        </motion.div>
        <motion.div variants={cardVariants} whileHover={{ scale: 1.02 }}>
          <BlogCard />
        </motion.div>
        <motion.div variants={cardVariants} whileHover={{ scale: 1.02 }}>
          <BlogCard />
        </motion.div>
      </motion.section>
    </Conatiner2>
  );
};

export default Blog;
