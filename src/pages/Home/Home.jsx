import { motion } from 'framer-motion';
import Hero from './Hero';
import OnlineEvents from './OnlineEvents';
import JoinClubSphere from './JoinClubSphere';
import PopularCities from './PopularCities';
import HowClubSphereWork from './HowClubSphereWork';
import Blog from './Blog';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto lg:px-0 px-4">
      <Hero />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10px', amount: 0.3 }}
        variants={sectionVariants}
      >
        <OnlineEvents />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px', amount: 0.3 }}
        variants={sectionVariants}
      >
        <JoinClubSphere />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px', amount: 0.3 }}
        variants={sectionVariants}
      >
        <PopularCities />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px', amount: 0.3 }}
        variants={sectionVariants}
      >
        <HowClubSphereWork />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px', amount: 0.3 }}
        variants={sectionVariants}
      >
        <Blog />
      </motion.div>
    </section>
  );
};

export default Home;
