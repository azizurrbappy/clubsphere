import { motion } from 'framer-motion';
import Conatiner2 from '../../components/Container/Conatiner2';
import CityCard from '../../components/CityCard/CityCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const PopularCities = () => {
  return (
    <Conatiner2 className="mt-8 mb-30">
      <motion.div
        className="text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-[#232326] text-3xl font-bold max-sm:text-2xl">
          Popular cities on Meetup
        </h3>
        <p className="text-[#464649] mt-3">
          Looking for fun things to do near you? See what ClubSphere organizers
          are planning in cities around the country.
        </p>
      </motion.div>

      <motion.div
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div variants={cardVariants}>
          <CityCard
            title="New York"
            img="https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg?w=1200&h=630&q=95&fit=crop"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <CityCard
            title="San Francisco"
            img="https://images.squarespace-cdn.com/content/v1/5c7f5f60797f746a7d769cab/1708063049157-NMFAB7KBRBY2IG2BWP4E/the+golden+gate+bridge+san+francisco.jpg"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <CityCard
            title="Chicago"
            img="https://cdn.choosechicago.com/uploads/2020/10/CC-northave-beach-aerial-1-1800x1197.jpg"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <CityCard
            title="Nashville"
            img="https://www.visitmusiccity.com/sites/default/files/styles/image_gallery_image/public/2025-02/nashville-skyline-hero-2.jpg?itok=2vsUqnMd"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <CityCard
            title="Nashville"
            img="https://www.visitmusiccity.com/sites/default/files/styles/image_gallery_image/public/2025-02/nashville-skyline-hero-2.jpg?itok=2vsUqnMd"
          />
        </motion.div>
      </motion.div>
    </Conatiner2>
  );
};

export default PopularCities;
